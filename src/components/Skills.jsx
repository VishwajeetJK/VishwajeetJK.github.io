import React, { useState } from 'react'
import MonkeyDoodle from './MonkeyDoodle'
import ParticleBackground from './ParticleBackground'
import './Skills.css'

const skillCategories = [
  {
    name: 'Product Management',
    color: '#4285f4',
    skills: [
      { name: 'Product Strategy', level: 90 },
      { name: 'Roadmap Planning', level: 88 },
      { name: 'User Research', level: 85 },
      { name: 'Agile/Scrum', level: 90 },
      { name: 'Stakeholder Management', level: 88 },
      { name: 'Product Analytics', level: 85 },
      { name: 'A/B Testing', level: 82 },
    ]
  },
  {
    name: 'Software Development',
    color: '#34a853',
    skills: [
      { name: 'Full-Stack Development', level: 85 },
      { name: 'Frontend Development', level: 88 },
      { name: 'Backend Development', level: 85 },
      { name: 'React/JavaScript', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'API Development', level: 87 },
      { name: 'Database Design', level: 85 },
      { name: 'Git/Version Control', level: 90 },
      { name: 'DevOps/CI/CD', level: 80 },
      { name: 'Cloud Services (AWS/GCP)', level: 82 },
      { name: 'System Architecture', level: 85 },
    ]
  },
  {
    name: 'Data Science',
    color: '#ea4335',
    skills: [
      { name: 'Data Analysis', level: 88 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Statistical Modeling', level: 87 },
      { name: 'SQL', level: 90 },
      { name: 'Data Visualization', level: 88 },
      { name: 'Python (Data Science)', level: 90 },
      { name: 'Pandas/NumPy', level: 88 },
      { name: 'Tableau/Power BI', level: 85 },
      { name: 'Big Data Technologies', level: 80 },
      { name: 'Predictive Analytics', level: 85 },
    ]
  },
  {
    name: 'Product Design',
    color: '#fbbc04',
    skills: [
      { name: 'UI/UX Design', level: 88 },
      { name: 'User Interface Design', level: 85 },
      { name: 'User Experience Design', level: 87 },
      { name: '3D Modeling (Blender)', level: 85 },
      { name: '3D Animation', level: 82 },
      { name: 'Prototyping', level: 88 },
      { name: 'Design Systems', level: 85 },
      { name: 'Visual Design', level: 87 },
    ]
  },
  {
    name: 'Marketing',
    color: '#9c27b0',
    skills: [
      { name: 'Go-to-Market Strategy', level: 85 },
      { name: 'Go-to-Market - Inbound', level: 87 },
      { name: 'Go-to-Market - Outbound', level: 85 },
    ]
  }
]

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null)

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index)
  }

  return (
    <section id="skills" className="skills">
      <ParticleBackground />
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-description">
          Core competencies across Product Management, Software Development, Data Science, Product Design, and Marketing
        </p>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="skill-category">
              <button
                className={`category-header ${openCategory === index ? 'open' : ''}`}
                onClick={() => toggleCategory(index)}
                style={{ '--category-color': category.color }}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-arrow">{openCategory === index ? '▼' : '▶'}</span>
              </button>
              {openCategory === index && (
                <div className="category-skills">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: category.color
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <MonkeyDoodle />
    </section>
  )
}

export default Skills

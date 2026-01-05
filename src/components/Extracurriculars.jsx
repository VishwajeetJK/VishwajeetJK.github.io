import React, { useState } from 'react'
import columbiaPmcLogo from '../assets/columbiapmc.png'
import cevsLogo from '../assets/cevs.jpeg'
import columbiaHealthLogo from '../assets/columbiahealth.png'
import growwAikgLogo from '../assets/growwaikg.jpeg'
import anokhaNgoLogo from '../assets/anokhango.png'
import codechefVitLogo from '../assets/codechefvit.jpeg'
import redFoundationLogo from '../assets/redgroup.jpeg'
import OrganizationModal from './OrganizationModal'
import ParticleBackground from './ParticleBackground'
import './Extracurriculars.css'

const Extracurriculars = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(null)

  const organizationSummaries = {
    "Columbia PMC": {
      name: "Columbia Product Managers Club",
      role: "Vice President of Growth",
      logo: columbiaPmcLogo,
      summary: "The Columbia Product Managers Club (PMC) is a student-led organization at Columbia University dedicated to fostering product management excellence. The club organizes events, workshops, and research initiatives, collaborating with leading universities and industry professionals to build thought leadership in product management.",
      website: "https://www.linkedin.com/company/columbia-pmc/"
    },
    "Columbia Entrepreneurship and Venture Society": {
      name: "Columbia Entrepreneurship and Venture Society",
      role: "Fellow",
      logo: cevsLogo,
      summary: "The Columbia Entrepreneurship and Venture Society (CEVS) connects students with venture capitalists, entrepreneurs, and startup leaders. The organization hosts panels, workshops, and networking sessions to foster a vibrant entrepreneurial ecosystem and support aspiring entrepreneurs.",
      website: "https://www.linkedin.com/company/columbia-entrepreneurship-and-venture-society/"
    },
    "Columbia Health": {
      name: "Columbia Health",
      role: "Disability Proctor",
      logo: columbiaHealthLogo,
      summary: "Columbia Health provides comprehensive health and wellness services to the Columbia University community. The Disability Services office ensures accessible and equitable educational experiences for students with disabilities, providing accommodations and support in compliance with ADA guidelines.",
      website: "https://www.health.columbia.edu/"
    },
    "Groww": {
      name: "Groww",
      role: "AIKI / AIKG Volunteer",
      logo: growwAikgLogo,
      summary: "Groww's 'Ab India Karega Invest' (AIKI/AIKG) campaign promotes financial literacy across India. The initiative engages thousands of individuals through educational programs, interviews, and research to make investing accessible and understandable for all Indians.",
      website: "https://groww.in/ab-india-karega-groww"
    },
    "Anokha NGO": {
      name: "Anokha NGO",
      role: "Board Member & Volunteer",
      logo: anokhaNgoLogo,
      summary: "Anokha NGO is a non-government organisation in Vellore, India directly benefitting more than thousands of children through various live welfare projects on education, healthcare, livelihood and women empowerment. The organization aims at providing education through fun and innovative educational activities, bringing an inception of change in the society. Anokha organizes events like Scientastic, Vibrance cultural spectacle, awareness initiatives, and career workshops to nurture young talents and create positive social impact.",
      website: "https://ngoanokha.github.io/"
    },
    "Codechef VIT": {
      name: "Codechef VIT Chapter",
      role: "Project Specialist",
      logo: codechefVitLogo,
      summary: "Codechef VIT is the official chapter of CodeChef at Vellore Institute of Technology. The chapter organizes coding competitions, hackathons, and technical workshops, fostering innovation in AI/ML, VR, and software development. Members participate in international hackathons and work on projects addressing societal challenges.",
      website: "https://www.codechefvit.com/"
    },
    "Red Foundation": {
      name: "Red Foundation",
      role: "Disaster Relief and Healthcare Volunteer",
      logo: redFoundationLogo,
      summary: "Red Foundation is a humanitarian organization focused on disaster relief, healthcare, and community support. The foundation coordinates relief efforts during natural disasters, organizes medical campaigns, and provides essential services to communities in need across India.",
      website: "https://www.linkedin.com/company/red-estate-destination-pvt-ltd/"
    }
  }

  const extracurriculars = [
    {
      title: "Vice President of Growth",
      organization: "Columbia PMC",
      period: "Jan 2025 – Dec 2025",
      description: "As Vice President of Growth at the Columbia Product Managers Club, I organized large-scale product events and workshops, collaborating with leading universities such as MIT and Harvard to foster cross-campus innovation. I led the creation of the Columbia Product Review and directed the club's blog, articles, and research initiatives, establishing thought leadership on product management trends and best practices. My efforts significantly expanded the club's reach and impact within the product community.",
      color: '#4285f4',
      logo: columbiaPmcLogo,
      link: "https://www.linkedin.com/company/columbia-pmc/"
    },
    {
      title: "Fellow",
      organization: "Columbia Entrepreneurship and Venture Society",
      period: "Aug 2024 - Dec 2025",
      description: "As a Columbia Entrepreneurship and Ventures Fellow, I organized high-impact events connecting students with leading venture capitalists and top global founders, fostering a vibrant entrepreneurial ecosystem. I collaborated with VCs and startup leaders to host panels, workshops, and networking sessions, facilitating knowledge exchange and mentorship. My role also included supporting research initiatives and building partnerships that expanded opportunities for aspiring entrepreneurs within the Columbia community and beyond.",
      color: '#34a853',
      logo: cevsLogo,
      link: "https://www.linkedin.com/company/columbia-entrepreneurship-and-venture-society/"
    },
    {
      title: "Disability Proctor",
      organization: "Columbia Health",
      period: "Aug 2024 - Dec 2025",
      description: "As a Columbia Health Disability Proctor, I facilitated exam accommodations for students with disabilities, ensuring an accessible and equitable testing environment in compliance with university and ADA guidelines. I coordinated with faculty and Disability Services to organize and proctor exams, managed confidential documentation, and supported students' diverse needs through effective communication and attention to detail. My role contributed to upholding academic integrity and promoting inclusive educational access within the Columbia community.",
      color: '#ea4335',
      logo: columbiaHealthLogo,
      link: "https://www.health.columbia.edu/"
    },
    {
      title: "AIKI / AIKG Volunteer",
      organization: "Groww",
      period: "Jan 2022 – Dec 2023",
      description: "Involved in Groww's 'Ab India Karega Invest' campaign, promoting financial literacy and engaging over 10,000 individuals. Conducted 100+ interviews for the book 'Discovering India: Through the Eyes of Groww,' analyzing user feedback for investment trends. Conducted user research at Groww's Under-25 Summit to tailor financial services for younger demographics.",
      color: '#4285f4',
      logo: growwAikgLogo,
      link: "https://groww.in/ab-india-karega-groww"
    },
    {
      title: "Board Member & Volunteer",
      organization: "Anokha NGO",
      period: "Dec 2018 – Aug 2022",
      description: "Orchestrated offline and distance learning for over 300 underprivileged children across Vellore, Bangalore, and Chennai. Established a new center for Karunalaya Children Home. Spearheaded the Vibrance cultural event with 150+ participants. Facilitated 1-on-1 mentorship, video distribution, and online lectures during the Covid-19 lockdown. Led a team of 23 volunteers to coordinate study sessions and events.",
      color: '#fbbc04',
      logo: anokhaNgoLogo,
      link: "https://ngoanokha.github.io/"
    },
    {
      title: "Project Specialist",
      organization: "Codechef VIT",
      period: "Dec 2018 - May 2021",
      description: "Served as an AI/ML and VR Project Specialist at Codechef VIT, spearheading innovative projects and driving collaboration. Led teams at international hackathons like HackMIT, IvyHacks, PennApps, and NASA SpaceApps. Work spanned education, disaster management, and healthcare, leveraging AI/ML and VR technologies for societal challenges, honing leadership and technical expertise.",
      color: '#34a853',
      logo: codechefVitLogo,
      link: "https://www.codechefvit.com/"
    },
    {
      title: "Disaster Relief and Healthcare Volunteer",
      organization: "Red Foundation",
      period: "Jan 2015 – Aug 2024",
      description: "Deep involvement in various humanitarian efforts as a volunteer at Red Foundation. Led a cloth and book collection drive for Nepal Earthquake 2015 Victims. Provided aid during Chennai Floods. Consistently volunteered in diverse initiatives including disaster relief, Yoga workshops, essentials drives, and medical campaigns. Coordinated a crucial medical and essentials campaign during the COVID-19 pandemic.",
      color: '#ea4335',
      logo: redFoundationLogo,
      link: "https://www.linkedin.com/company/red-estate-destination-pvt-ltd/"
    }
  ]

  return (
    <section id="extracurriculars" className="extracurriculars">
      <ParticleBackground />
      <div className="extracurriculars-container">
        <h2 className="section-title">Extracurriculars</h2>
        <p className="section-description">
          Leadership roles, volunteer work, and community engagement initiatives
        </p>
        <div className="extracurriculars-list">
          {extracurriculars.map((activity, index) => {
            const CardWrapper = activity.link ? 'a' : 'div'
            const wrapperProps = activity.link ? {
              href: activity.link,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'extracurricular-card-link'
            } : {}
            
            return (
              <CardWrapper key={index} {...wrapperProps}>
                <div className="extracurricular-card">
                  <div className="extracurricular-card-header" style={{ '--accent-color': activity.color }}>
                    <div className="extracurricular-logo-container">
                      <div 
                        className="extracurricular-logo" 
                        style={{ '--accent-color': activity.color }}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          if (activity.logo) setSelectedOrganization(organizationSummaries[activity.organization])
                        }}
                      >
                        {activity.logo ? (
                          <img 
                            src={activity.logo} 
                            alt={`${activity.organization} logo`} 
                            className="organization-logo"
                            style={{ cursor: 'pointer' }}
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'block'
                            }}
                          />
                        ) : null}
                        <div className="logo-placeholder" style={{ display: activity.logo ? 'none' : 'block' }}></div>
                      </div>
                    </div>
                    <div className="extracurricular-title-section">
                      <h3 className="extracurricular-card-title">{activity.title}</h3>
                      <p className="extracurricular-organization">{activity.organization}</p>
                    </div>
                    <span className="extracurricular-period">{activity.period}</span>
                  </div>
                  <div className="extracurricular-card-content">
                    <p className="extracurricular-description">{activity.description}</p>
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
      <OrganizationModal 
        isOpen={selectedOrganization !== null}
        onClose={() => setSelectedOrganization(null)}
        organization={selectedOrganization}
      />
    </section>
  )
}

export default Extracurriculars

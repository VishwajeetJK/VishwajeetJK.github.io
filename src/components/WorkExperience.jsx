import React, { useState } from 'react'
import vsmLogo from '../assets/vsminc.png'
import lvmhLogo from '../assets/lvmh.png'
import gatesFoundationLogo from '../assets/gatesfoundation.png'
import hearmeLogo from '../assets/hearme.png'
import nestawayLogo from '../assets/nestaway.jpg'
import growwLogo from '../assets/groww.png'
import redGroupLogo from '../assets/redgroup.jpeg'
import timesGroupLogo from '../assets/timesgroup.png'
import OrganizationModal from './OrganizationModal'
import ParticleBackground from './ParticleBackground'
import './WorkExperience.css'

const WorkExperience = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(null)

  const organizationSummaries = {
    "Victory Strategy Management Inc": {
      name: "Victory Strategy Management Inc",
      role: "Venture Product Management",
      logo: vsmLogo,
      summary: "Victory Strategy Management Inc is a strategic consulting firm specializing in product management and business transformation. The company focuses on helping organizations drive innovation through data-driven decision making and cutting-edge product strategies.",
      website: "https://www.victory-vsm.com/"
    },
    "Louis Vuitton Moët Hennessy USA": {
      name: "Louis Vuitton Moët Hennessy USA",
      role: "Director's Office Product Management Trainee",
      logo: lvmhLogo,
      summary: "LVMH is the world's leading luxury goods group, bringing together over 75 prestigious brands across wines and spirits, fashion and leather goods, perfumes and cosmetics, watches and jewelry, and selective retailing. The company is known for its commitment to excellence, innovation, and sustainable development.",
      website: "https://www.lvmh.com/en"
    },
    "Gates Foundation, USA": {
      name: "Bill & Melinda Gates Foundation",
      role: "Graduate Founder's Office Consultant",
      logo: gatesFoundationLogo,
      summary: "The Bill & Melinda Gates Foundation is one of the world's largest private foundations, working to help all people lead healthy, productive lives. The foundation focuses on global health, education, and economic opportunity, with a mission to reduce inequity and improve lives around the world.",
      website: "https://www.gatesfoundation.org"
    },
    "HearMe for Clinton Foundation": {
      name: "HearMe for Clinton Foundation",
      role: "Graduate Founder's Office Consultant",
      logo: hearmeLogo,
      summary: "HearMe is a mental health platform that connects people with trained listeners for emotional support. The organization works in partnership with the Clinton Foundation to provide accessible mental health resources and create safe spaces for people to share their experiences.",
      website: "https://hearme.app/"
    },
    "Nestaway (Backed by Tiger Global, Goldman Sachs)": {
      name: "Nestaway",
      role: "Founder's Office Product Management",
      logo: nestawayLogo,
      summary: "Nestaway is India's fastest-growing managed home rental network, backed by Tiger Global and Goldman Sachs. The company provides end-to-end rental solutions, making it easy for people to find, rent, and manage homes across major Indian cities.",
      website: "https://www.nestaway.com"
    },
    "Groww (Backed by Sequoya, Y Combinator 2018)": {
      name: "Groww",
      role: "Software Development Engineer",
      logo: growwLogo,
      summary: "Groww is India's leading investment platform, backed by Sequoia Capital and Y Combinator. The company democratizes investing by making it simple, transparent, and accessible to millions of Indians, offering stocks, mutual funds, and other investment products.",
      website: "https://groww.in"
    },
    "Red Group Services Pvt Ltd": {
      name: "Red Group Services",
      role: "Founder's Office",
      logo: redGroupLogo,
      summary: "Red Group Services is a real estate development company specializing in residential and agricultural plot sales across South India. The company focuses on creating value through innovative design, strategic location selection, and customer-centric approaches.",
      website: "https://www.linkedin.com/company/red-estate-destination-pvt-ltd/"
    },
    "Times Group (Times of India)": {
      name: "Times Group",
      role: "Software Development Intern",
      logo: timesGroupLogo,
      summary: "The Times Group is India's largest media conglomerate, with interests across print, digital, radio, outdoor, and television. The group publishes The Times of India, one of the world's largest English-language newspapers, and operates numerous other media properties.",
      website: "https://bccl.in/"
    }
  }

  const experiences = [
    {
      title: "Venture Product Management",
      company: "Victory Strategy Management Inc",
      period: "Sep 2025 - Present",
      description: "Leading strategic initiatives and product management consulting engagements. Driving business transformation through data-driven decision making and innovative product strategies.",
      color: '#fbbc04',
      logo: vsmLogo,
      link: "https://www.victory-vsm.com/"
    },
    {
      title: "Director's Office Product Management Trainee",
      company: "Louis Vuitton Moët Hennessy USA",
      period: "Aug 2024 - Aug 2025",
      description: "Led development of predictive analytics platform leveraging machine learning, boosting delivery accuracy by 30%, minimizing delays by 25%. Designed adaptive AI workflow processes for rapid regulatory pivots, cutting adjustment cycle time by 60%. Deployed unified real-time tracking solution, amplifying shipment transparency by 35% and diminishing disruption response times by 20%. Built compliance automation systems, bringing down regulatory errors for 80%+ SKUs and cutting audit preparation time by 50%.",
      color: '#4285f4',
      logo: lvmhLogo,
      link: "https://www.lvmh.com/en"
    },
    {
      title: "Graduate Founder's Office Consultant",
      company: "Gates Foundation, USA",
      period: "Aug 2024 - May 2025",
      description: "Collaborating with INSEAD and TOTOGEO to develop go-to-market strategies. Addressing connectivity and cost issues for underserved language communities. Analyzing market expansion opportunities and developing scalable solutions.",
      color: '#34a853',
      logo: gatesFoundationLogo,
      link: "https://www.gatesfoundation.org/"
    },
    {
      title: "Graduate Founder's Office Consultant",
      company: "HearMe for Clinton Foundation",
      period: "Aug 2024 - May 2025",
      description: "Leading HearMe's initiative to enhance operational efficiency and scalability through innovative technology. Analyzing user data to generate insights for refining community operations. Driving efforts to reduce scheduling gaps, automating shift management to minimize administrative load, and designing a scalable system to support growth and adapt to varying needs.",
      color: '#ea4335',
      logo: hearmeLogo,
      link: "https://hearme.app/"
    },
    {
      title: "Founder's Office Product Management",
      company: "Nestaway (Backed by Tiger Global, Goldman Sachs)",
      period: "Jan 2024 - Aug 2024",
      description: "Defined and prioritized product roadmap for Real Estate Facility Management System, leading pan India market research for 10K+ properties, reducing maintenance response time by 30% and refining vendor efficiency by 35%. Spearheaded product strategy for rental listings, driving 20% surge in data accuracy and 35% boost in process efficiency. Launched new features based on user feedback, resulting in 15% rise in customer satisfaction scores. Drove cross-functional alignment to deliver iterative feature releases, elevating customer engagement by 40%.",
      color: '#fbbc04',
      logo: nestawayLogo,
      link: "https://www.nestaway.com/"
    },
    {
      title: "Software Development Engineer",
      company: "Groww (Backed by Sequoya, Y Combinator 2018)",
      period: "Dec 2021 - Dec 2023",
      description: "Collaborated with product and design to define and launch BSE segment roadmap, optimizing Order/Positions Workflow that advanced Futures & Options orders by 38%, generating $2M+ in monthly revenue. Led cross-functional teams to design Multi Order Workflow features (Basket, Iceberg, Daily Loss Limit, SmallCase), boosting execution efficiency by 31%. Directed end-to-end development of Server-to-Server Workflow, scaling platform to support 100x amplification in user traffic with 99.99% uptime. Spearheaded Scale & Stability projects by automating product operations and developing real-time analytics dashboards, enabling data-driven decision-making for product managers and UI/UX teams supporting 3M+ users. Drove integration of Real-Time Early Pay In & Margin Release features, increasing order volume by 42% and improving user satisfaction scores by 65%.",
      color: '#4285f4',
      logo: growwLogo,
      link: "https://groww.in/"
    },
    {
      title: "Founder's Office",
      company: "Red Group Services Pvt Ltd",
      period: "Dec 2020 - Dec 2021",
      description: "Collaborated with the CEO and CTO on residential and agricultural plot sales in South India, achieving a 15% increase in conversion rates. Elevated customer satisfaction through 3D modeling for architecture/design planning, generating over $200K in profit. Established a scalable product funnel and optimized sales processes.",
      color: '#34a853',
      logo: redGroupLogo,
      link: "https://www.linkedin.com/company/red-estate-destination-pvt-ltd/"
    },
    {
      title: "Software Development Intern",
      company: "Times Group (Times of India)",
      period: "Mar 2021 - May 2021",
      description: "Spearheaded projects aimed at automating documentation and approval processes across various departments. Created innovative tools like Instant Document Approval with Status Tracker and Annual Target Lock. Solutions significantly enhanced operational efficiency, yielding improvements of over 28% in existing systems.",
      color: '#ea4335',
      logo: timesGroupLogo,
      link: "https://bccl.in/"
    }
  ]

  return (
    <section id="work-experience" className="work-experience">
      <ParticleBackground />
      <div className="work-experience-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-description">
          Professional journey across product management, software development, and strategic consulting
        </p>
        <div className="work-experience-list">
          {experiences.map((exp, index) => {
            const CardWrapper = exp.link ? 'a' : 'div'
            const wrapperProps = exp.link ? {
              href: exp.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {}
            
            return (
              <CardWrapper 
                key={index} 
                className={`work-experience-card ${exp.link ? 'work-experience-card-link' : ''}`}
                {...wrapperProps}
                style={exp.link ? { textDecoration: 'none', color: 'inherit', display: 'block' } : {}}
              >
                <div className="work-card-header" style={{ '--accent-color': exp.color }}>
                  <div className="work-card-logo-container">
                    <div 
                      className="work-card-logo" 
                      style={{ '--accent-color': exp.color }}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (exp.logo) setSelectedOrganization(organizationSummaries[exp.company])
                      }}
                    >
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="company-logo"
                          style={{ cursor: 'pointer' }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'block'
                          }}
                        />
                      ) : null}
                      <div className="logo-placeholder" style={{ display: exp.logo ? 'none' : 'block' }}></div>
                    </div>
                  </div>
                  <div className="work-card-title-section">
                    <h3 className="work-card-title">{exp.title}</h3>
                    <p className="work-card-company">{exp.company}</p>
                  </div>
                  <span className="work-card-period">{exp.period}</span>
                </div>
                <div className="work-card-content">
                  <p className="work-card-description">{exp.description}</p>
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

export default WorkExperience

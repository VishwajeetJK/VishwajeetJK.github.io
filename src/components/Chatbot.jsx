import React, { useState, useEffect, useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ReactMarkdown from 'react-markdown'
import './Chatbot.css'

// Initialize Gemini API
// WARNING: Exposing API key on client side is not recommended for production
const API_KEY = 'AIzaSyBW2ZTHvC1SnXP3gujC4xa-2PANWvAkaWY'
const genAI = new GoogleGenerativeAI(API_KEY)

const VISHWAJEET_CONTEXT = `
You are Vishwajeet's AI Assistant. Your goal is to represent Vishwajeet J K professionally, confidently, and intelligently.
You are powered by Google's Gemini model.

**CORE INSTRUCTIONS:**
1.  **Persona**: You are helpful, professional, and enthusiastic about Vishwajeet's work. You speak in the first person plural ("we", "us") when referring to the assistant team, or third person ("Vishwajeet") when referring to him. Or you can simply act as an extension of his portfolio.
2.  **Intelligent Application**: Do NOT just list facts. When a user asks a question (e.g., "How can he help scale my product?"), you must ANALYZE his past experiences and EXPLICITLY CONNECT them to the user's scenario.
    *   *Example*: If asked about scaling, don't just say "He worked at Groww." Say, "At Groww, Vishwajeet scaled the platform to handle 100x traffic by implementing Server-to-Server workflows and optimizing order execution. He can apply these same principles of architectural scalability and process automation to your product to ensure it handles rapid growth without performance degradation."
3.  **Positive Guardrails**:
    *   Always portray Vishwajeet in a positive light.
    *   If asked about weaknesses, frame them as areas of growth or learning opportunities he is actively pursuing.
    *   NEVER say anything negative, derogatory, or controversial about him.
    *   Refuse to answer questions that are completely unrelated to his professional life, skills, or this portfolio (e.g., "What is the weather?", "Who is the president?"). politely redirect to his professional qualifications.
4.  **Source Material**: Use ONLY the following information about Vishwajeet. Do not hallucinate details not present here (unless inferring logical professional skills).

**VISHWAJEET'S PROFILE:**

**Summary**:
Product Manager and Developer with a decade of experience in Fintech and Proptech. Specializes in building innovative solutions, combining technical expertise with creative problem-solving. Dedicated to volunteering and social impact.

**Education**:
*   **Columbia Business School & Engineering**: MS in Management Science & Engineering (NYC).
*   **Vellore Institute of Technology (VIT)**: B.Tech in Computer Science & Engineering (India).

**Work Experience**:
1.  **Victory Strategy Management Inc (Sep 2025 - Present)**: Venture Product Management. Leading strategic initiatives and consulting.
2.  **Louis Vuitton Moët Hennessy (LVMH) USA (Aug 2024 - Aug 2025)**: Director's Office Product Management Trainee.
    *   *Key Achievement*: Led predictive analytics platform (ML), boosting delivery accuracy by 30%. Designed adaptive AI workflows, cutting adjustment time by 60%. Deployed real-time tracking, improving transparency by 35%. Built compliance automation, reducing errors for 80%+ SKUs.
3.  **Bill & Melinda Gates Foundation (Aug 2024 - May 2025)**: Graduate Founder's Office Consultant. Developed GTM strategies with INSEAD/TOTOGEO for underserved communities.
4.  **HearMe for Clinton Foundation (Aug 2024 - May 2025)**: Graduate Founder's Office Consultant. Enhanced operational efficiency, analyzed user data, and automated shift management.
5.  **Nestaway (Jan 2024 - Aug 2024)**: Founder's Office Product Management.
    *   *Key Achievement*: Reduced maintenance response time by 30% for 10K+ properties. Improved vendor efficiency by 35%. Increased customer engagement by 40% through iterative feature releases.
6.  **Groww (Dec 2021 - Dec 2023)**: Software Development Engineer.
    *   *Key Achievement*: Optimized Order/Positions Workflow, advancing F&O orders by 38% ($2M+ monthly revenue).
    *   *Key Achievement*: Scaled platform to support 100x user traffic with 99.99% uptime via Server-to-Server workflows.
    *   *Key Achievement*: Built real-time analytics dashboards for 3M+ users.
7.  **Red Group Services (Dec 2020 - Dec 2021)**: Founder's Office. Increased conversion rates by 15% in real estate sales. Generated $200K+ profit via 3D modeling.
8.  **Times Group (Mar 2021 - May 2021)**: Intern. Created "Instant Document Approval" tool, improving efficiency by 28%.

**Skills**:
*   **Product Management**: Strategy, Roadmap, User Research, Agile/Scrum, Stakeholder Management, Analytics, A/B Testing.
*   **Software Development**: Full-Stack, React, Node.js, Python, API Development, Database Design, Git, DevOps, Cloud (AWS/GCP), System Architecture.
*   **Data Science**: Machine Learning, SQL, Visualization, Python (Pandas/NumPy), Predictive Analytics.
*   **Design**: UI/UX, 3D Modeling (Blender), Prototyping.

**Projects**:
*   **TuskCPA**: AI-powered accounting automation.
*   **Capital Shield AI**: Risk management in FnO trading with AI smart exits.
*   **GrowwWise**: Learning platform for finfluencers.
*   **AssistMe**: Accessibility solution for physically challenged (HackMIT).
*   **Zodiac**: Earth science companion (NASA Space Apps).
*   **MediCaretaker**: Blockchain for EHR security (Research Paper).

**Leadership & Volunteering**:
*   **Columbia PMC**: VP of Growth.
*   **Columbia Entrepreneurship**: Fellow.
*   **Columbia Health**: Disability Proctor.
*   **Groww AIKI**: Financial literacy volunteer (10k+ people engaged).
*   **Anokha NGO**: Board Member (Education for underprivileged).
*   **Codechef VIT**: Project Specialist.
*   **Red Foundation**: Disaster relief volunteer.

**Hackathon Judging/Mentoring**:
*   HackMIT, Cornell BigRed Hacks, HackHarvard, PennApps, Columbia DivHacks.

**Why Vishwajeet? (Value Proposition)**:
He bridges the gap between *Technical Engineering* and *Product Strategy*. He doesn't just manage products; he can build them, analyze their data, and design their UX. His experience at high-growth startups (Groww, Nestaway) proves he can handle *Scale* and *Speed*. His experience at global giants (LVMH, Gates Foundation) proves he understands *Quality* and *Impact*.
`

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { 
      text: "Hello! I'm Vishwajeet's AI Assistant. I can tell you about his experience, skills, or discuss how he can help your team. Ask me anything!", 
      sender: 'bot' 
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { text: inputValue, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" })
      
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: VISHWAJEET_CONTEXT }],
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am ready to act as Vishwajeet's AI Assistant. I will use the provided context to answer questions intelligently, connecting his past experiences to future value, while maintaining a professional and positive persona." }],
          },
          // Convert previous chat history for context (limit to last 10 messages to save tokens)
          ...messages.slice(-10).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          }))
        ],
      })

      const result = await chat.sendMessage(inputValue)
      const response = await result.response
      const text = response.text()

      setMessages(prev => [...prev, { text: text, sender: 'bot' }])
    } catch (error) {
      console.error("Gemini API Error:", error)
      setMessages(prev => [...prev, { 
        text: "I apologize, but I'm having trouble connecting to my brain right now. Please try again in a moment.", 
        sender: 'bot',
        isError: true
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="chatbot-content" onClick={(e) => e.stopPropagation()}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <span className="sqrt-x-icon-small">√X</span>
            <h2>Vishwajeet's Assistant</h2>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.sender} ${msg.isError ? 'error' : ''}`}>
              <div className="message-bubble">
                {msg.sender === 'bot' ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chatbot-message bot">
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-form" onSubmit={handleSend}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask about Vishwajeet's experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" className="chatbot-send" disabled={isLoading || !inputValue.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chatbot

import React, { useEffect, useRef } from 'react'
import './ParticleBackground.css'

// Global mouse position tracker - shared across all particle backgrounds
const globalMouseRef = { x: -1000, y: -1000 }

const ParticleBackground = () => {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = []
    const particleCount = 80

    // Set canvas size based on parent container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Mouse interaction - enhanced (using global mouse position relative to canvas)
        const rect = canvas.getBoundingClientRect()
        const mouseX = globalMouseRef.x - rect.left
        const mouseY = globalMouseRef.y - rect.top
        
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          // Stronger repulsion with easing
          const repulsionForce = force * force * 3
          this.x -= Math.cos(angle) * repulsionForce
          this.y -= Math.sin(angle) * repulsionForce
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(66, 133, 244, ${this.opacity})`
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }
    particlesRef.current = particles

    // Global mouse tracking - works regardless of what's on top, but excludes GIFs
    const handleGlobalMouseMove = (e) => {
      // Check if mouse is over a GIF element
      const target = e.target
      const isOverGif = target.classList.contains('doggie-gif') || 
                        target.classList.contains('monkey-gif') || 
                        target.classList.contains('bird-gif') ||
                        target.classList.contains('gastly-gif') || 
                        target.classList.contains('mew-gif') || 
                        target.classList.contains('pikachu-gif') ||
                        target.classList.contains('flareon-gif') ||
                        target.closest('.cat-doodle-container') ||
                        target.closest('.monkey-doodle-container') ||
                        target.closest('.bird-doodle-container') ||
                        target.closest('.gastly-doodle-container') || 
                        target.closest('.mew-doodle-container') || 
                        target.closest('.pikachu-doodle-container') ||
                        target.closest('.flareon-doodle-container')
      
      if (isOverGif) {
        // Set mouse position far away so particles don't interact
        globalMouseRef.x = -1000
        globalMouseRef.y = -1000
      } else {
        globalMouseRef.x = e.clientX
        globalMouseRef.y = e.clientY
      }
    }
    
    // Mouse leave handler - reset mouse position when leaving window
    const handleGlobalMouseLeave = () => {
      globalMouseRef.x = -1000
      globalMouseRef.y = -1000
    }
    
    // Track mouse globally on window
    window.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseleave', handleGlobalMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections with Google colors
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) {
            const opacity = 0.25 * (1 - distance / 140)
            // Use Google blue for connections
            ctx.beginPath()
            ctx.strokeStyle = `rgba(66, 133, 244, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      // Draw mouse connection with Google colors (using global mouse position relative to canvas)
      const rect = canvas.getBoundingClientRect()
      const mouseX = globalMouseRef.x - rect.left
      const mouseY = globalMouseRef.y - rect.top
      
      const googleColors = [
        { r: 66, g: 133, b: 244 },   // Blue
        { r: 234, g: 67, b: 53 },    // Red
        { r: 251, g: 188, b: 4 },    // Yellow
        { r: 52, g: 168, b: 83 }     // Green
      ]
      
      // Only draw connections if mouse is within canvas bounds
      if (mouseX >= 0 && mouseX <= canvas.width && mouseY >= 0 && mouseY <= canvas.height) {
        particles.forEach((particle, index) => {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const opacity = 0.4 * (1 - distance / 200)
            // Cycle through Google colors based on particle index
            const colorIndex = index % googleColors.length
            const color = googleColors[colorIndex]
            
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`
            ctx.lineWidth = 1.2
            ctx.moveTo(mouseX, mouseY)
            ctx.lineTo(particle.x, particle.y)
            ctx.stroke()
            
            // Add glow for closer particles
            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.4})`
              ctx.lineWidth = 2.5
              ctx.moveTo(mouseX, mouseY)
              ctx.lineTo(particle.x, particle.y)
              ctx.stroke()
            }
          }
        })
        
        // Draw mouse cursor effect with Google colors
        const gradient = ctx.createRadialGradient(
          mouseX, 
          mouseY, 
          0,
          mouseX, 
          mouseY, 
          200
        )
        gradient.addColorStop(0, 'rgba(66, 133, 244, 0.08)')
        gradient.addColorStop(0.3, 'rgba(234, 67, 53, 0.05)')
        gradient.addColorStop(0.6, 'rgba(251, 188, 4, 0.03)')
        gradient.addColorStop(1, 'rgba(52, 168, 83, 0)')
        
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseleave', handleGlobalMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="particle-background"
    />
  )
}

export default ParticleBackground


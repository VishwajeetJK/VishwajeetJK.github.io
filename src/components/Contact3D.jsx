import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const Contact3D = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* 3D Background Plane */}
      <mesh position={[0, 0, -2]} rotation={[0, 0, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#f8f9fa" />
      </mesh>

      {/* 3D Content Panel */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[10, 7, 0.2]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* HTML Content Overlay */}
      <Html
        position={[0, 0, 0.2]}
        center
        transform
        occlude
        style={{
          width: '600px',
          pointerEvents: 'auto',
        }}
      >
        <div className="contact-3d-content">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-description">
            Let's connect and explore opportunities to work together.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:contact@vishwajeet.com"
              className="contact-button"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              GitHub
            </a>
          </div>
        </div>
      </Html>

      {/* Decorative 3D Elements */}
      <mesh position={[-3, 2, 1]} rotation={[0, 0.3, 0.3]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#4285f4" />
      </mesh>
      <mesh position={[3, -2, 1]} rotation={[0, -0.3, -0.3]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#34a853" />
      </mesh>
    </group>
  )
}

export default Contact3D



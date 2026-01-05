import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Text } from '@react-three/drei'
import * as THREE from 'three'

const Hero3D = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* 3D Background Plane */}
      <mesh position={[0, 0, -2]} rotation={[0, 0, 0]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* 3D Content Panel */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[10, 7, 0.2]} />
        <meshStandardMaterial 
          color="#f8f9fa" 
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
        <div className="hero-3d-content">
          <p className="hero-greeting">- HEY THERE</p>
          <h1 className="hero-name">I'M VISHWAJEET J K</h1>
          <p className="hero-description">
            I'm a versatile professional skilled in product management and development, 
            with extensive experience in Fintech & Proptech. With a strategic mindset 
            and flair for innovation, I navigate seamlessly between engineering and 
            creativity, delivering impactful solutions. Moreover, my decade-long 
            volunteering experiences have honed my ability to connect with the masses 
            and develop innovative solutions that make a lasting impact.
          </p>
          <div className="hero-buttons">
            <a href="#resume" className="hero-button">Resume</a>
            <a href="#cover-letter" className="hero-button">Cover Letter</a>
          </div>
        </div>
      </Html>

      {/* Decorative 3D Elements */}
      <mesh position={[-5, 2, 1]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#4285f4" />
      </mesh>
      <mesh position={[5, -2, 1]} rotation={[0, -0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#34a853" />
      </mesh>
    </group>
  )
}

export default Hero3D



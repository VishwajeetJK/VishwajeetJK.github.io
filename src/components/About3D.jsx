import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const About3D = () => {
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
        <div className="about-3d-content">
          <h2 className="section-title">About</h2>
          <div className="about-text">
            <p>
              With a decade of experience in product management and development, 
              I specialize in building innovative solutions in Fintech and Proptech. 
              My approach combines technical expertise with creative problem-solving, 
              enabling me to deliver products that make a meaningful impact.
            </p>
            <p>
              Beyond my professional work, I've dedicated over ten years to volunteering, 
              which has strengthened my ability to understand diverse perspectives and 
              create solutions that truly serve communities.
            </p>
          </div>
        </div>
      </Html>

      {/* Decorative 3D Elements */}
      <mesh position={[-4, 3, 1]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color="#ea4335" />
      </mesh>
      <mesh position={[4, -3, 1]} rotation={[-0.5, 0, 0]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial color="#fbbc04" />
      </mesh>
    </group>
  )
}

export default About3D



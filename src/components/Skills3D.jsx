import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Sphere } from '@react-three/drei'

const skills = [
  { name: 'Product Management', level: 90, color: '#4285f4' },
  { name: 'Fintech', level: 85, color: '#34a853' },
  { name: 'Proptech', level: 85, color: '#ea4335' },
  { name: 'Engineering', level: 80, color: '#fbbc04' },
  { name: 'Innovation', level: 90, color: '#4285f4' },
  { name: 'Strategy', level: 88, color: '#34a853' },
  { name: 'Development', level: 82, color: '#ea4335' },
  { name: 'Leadership', level: 85, color: '#fbbc04' },
]

const Skills3D = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.1
    }
  })

  // Arrange skills in 3D space
  const positions = skills.map((_, index) => {
    const angle = (index / skills.length) * Math.PI * 2
    const radius = 2.5
    return [
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.6,
      Math.sin(angle) * 0.3
    ]
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

      {/* 3D Skill Spheres */}
      {skills.map((skill, index) => {
        const [x, y, z] = positions[index]
        return (
          <SkillSphere
            key={skill.name}
            skill={skill}
            position={[x, y, z + 1]}
            index={index}
          />
        )
      })}

      {/* HTML Content Overlay */}
      <Html
        position={[0, -3, 0.2]}
        center
        transform
        occlude
        style={{
          width: '700px',
          pointerEvents: 'auto',
        }}
      >
        <div className="skills-3d-content">
          <h2 className="section-title">Skills</h2>
          <p className="skills-description">
            Interactive 3D visualization of my core competencies
          </p>
        </div>
      </Html>
    </group>
  )
}

function SkillSphere({ skill, position, index }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + index * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 + index * 0.5
    }
  })

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[skill.level / 25, 32, 32]}>
        <meshStandardMaterial
          color={skill.color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.7}
          emissive={skill.color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  )
}

export default Skills3D

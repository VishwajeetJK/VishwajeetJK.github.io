import React from 'react'
import { Html } from '@react-three/drei'
import Hero3D from './Hero3D'
import About3D from './About3D'
import Skills3D from './Skills3D'
import Contact3D from './Contact3D'

const Scene3D = ({ currentSection }) => {
  return (
    <>
      {/* Hero Section - Position 0 */}
      <group position={[0, 0, 0]}>
        <Hero3D />
      </group>

      {/* About Section - Position -15 */}
      <group position={[0, -15, 0]}>
        <About3D />
      </group>

      {/* Skills Section - Position -30 */}
      <group position={[0, -30, 0]}>
        <Skills3D />
      </group>

      {/* Contact Section - Position -45 */}
      <group position={[0, -45, 0]}>
        <Contact3D />
      </group>
    </>
  )
}

export default Scene3D



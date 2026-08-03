'use client'

import { useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

function Model() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/glb/rubic_1.glb')

  useLayoutEffect(() => {
    if (!group.current) return

    gsap.to(group.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 4,
      z: Math.PI * 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: '#growth-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })
  }, [])

  return (
    <group ref={group} scale={1.6}>
      <primitive object={scene} />
    </group>
  )
}

export default function RubicModel() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <Canvas camera={{ position: [0, -100, 6], fov: 40 }}>
        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 0, 5]}
          intensity={5}
        />

        <pointLight position={[-10, 0, -20]} intensity={105} />
        <pointLight position={[0, -10, 0]} intensity={105} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <Model />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/glb/rubic.glb')
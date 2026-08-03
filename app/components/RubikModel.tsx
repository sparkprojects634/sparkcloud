'use client'

import { useLayoutEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

function Cube() {
  const master = useRef<THREE.Group>(null)
  const outer = useRef<THREE.Group>(null)
  const middle = useRef<THREE.Group>(null)

  const outerModel = useGLTF('/glb/rubic_1.glb')
  const middleModel = useGLTF('/glb/rubic_2.glb')

  useLayoutEffect(() => {
    if (!outer.current || !middle.current) return

    ScrollTrigger.create({
      trigger: '#growth-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,

      onUpdate: (self) => {
        const p = self.progress

        // Rotate whole cube
        outer.current!.rotation.x = p * Math.PI * -4
        outer.current!.rotation.y = p * Math.PI * 4

        // Rotate middle slice independently
        middle.current!.rotation.y = p * Math.PI * 2
        middle.current!.rotation.x = p * Math.PI * -4
      },
    })
  }, [])

  return (
    <group
      ref={master}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={1.55}
    >
      {/* Outer Cube */}
      <group
        ref={outer}
        position={[0, 0, 0]}
      >
        <primitive object={outerModel.scene.clone()} />
      </group>

      {/* Middle Layer */}
      <group
        ref={middle}
        position={[0, 0, 0]} // adjust if required
      >
        <primitive object={middleModel.scene.clone()} />
      </group>
    </group>
  )
}

export default function RubicModel() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <Canvas
        camera={{
          position: [0, 0, 100],
          fov: 35,
        }}
      >
        {/* Ambient */}
        <ambientLight intensity={2.5} />

        {/* Main */}
        <directionalLight
          position={[6, 8, 8]}
          intensity={5}
        />

        {/* Fill */}
        <directionalLight
          position={[-6, -4, 5]}
          intensity={3}
        />

        {/* Rim */}
        <pointLight
          position={[0, 5, 10]}
          intensity={10}
        />

        {/* Bottom */}
        <pointLight
          position={[0, -5, 6]}
          intensity={5}
        />


        <Cube />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/glb/rubic_1.glb')
useGLTF.preload('/glb/rubic_2.glb')
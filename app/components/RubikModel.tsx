'use client'

import { useLayoutEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

function Cube() {
  const master = useRef<THREE.Group>(null)
  const outer = useRef<THREE.Group>(null)
  const middle = useRef<THREE.Group>(null)

  const { viewport } = useThree()

  const outerModel = useGLTF('/glb/rubic_1.glb')
  const middleModel = useGLTF('/glb/rubic_2.glb')

  useLayoutEffect(() => {
    if (!outer.current || !middle.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#growth-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,

        onUpdate: (self) => {
          const p = self.progress

          // Whole cube
          outer.current!.rotation.x =
            p * Math.PI * -4

          outer.current!.rotation.y =
            p * Math.PI * 4

          // Middle layer
          middle.current!.rotation.y =
            p * Math.PI * 2

          middle.current!.rotation.x =
            p * Math.PI * -4
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  /*
  |--------------------------------------------------------------------------
  | RESPONSIVE SCALE
  |--------------------------------------------------------------------------
  */
  const { size } = useThree()

  const scale =
    size.width < 640   // sm
      ? 1
      : size.width < 1024  // lg
        ? 0.85
        : size.width < 1536 // 2xl
          ? 1.15
          : 1.55

  return (
    <group
      ref={master}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={scale}
    >

      {/* OUTER CUBE */}

      <group
        ref={outer}
        position={[0, 0, 0]}
      >
        <primitive
          object={outerModel.scene.clone()}
        />
      </group>


      {/* MIDDLE LAYER */}

      <group
        ref={middle}
        position={[0, 0, 0]}
      >
        <primitive
          object={middleModel.scene.clone()}
        />
      </group>

    </group>
  )
}

export default function RubicModel() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">

      <Canvas
        camera={{
          position: [0, -50, 100],
          fov: 35,
        }}
      >

        <ambientLight intensity={2.5} />

        <directionalLight
          position={[6, 8, 8]}
          intensity={5}
        />

        <directionalLight
          position={[-6, -4, 5]}
          intensity={3}
        />

        <pointLight
          position={[0, 5, 10]}
          intensity={10}
        />

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
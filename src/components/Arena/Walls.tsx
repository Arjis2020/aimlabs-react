import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import React, { createRef, Suspense, useRef, useState } from 'react'
import { Mesh } from 'three'
import VLight from './VLight'

export default function Walls() {
  const leftWall = useRef(Array(20).fill(0).map(() => createRef()));
  const rightWall = useRef(Array(20).fill(0).map(() => createRef()));
  return (
    <Suspense>
      <mesh rotation={[0, Math.PI / 2, Math.PI / 2]} position={[-200, 0, 0]}>
        <planeGeometry attach='geometry' args={[500, 5000, 50]} />
        <meshStandardMaterial attach='material' metalness={0.5} color='black' />
      </mesh>
      <mesh rotation={[0, -Math.PI / 2, -Math.PI / 2]} position={[200, 0, 0]}>
        <planeGeometry attach='geometry' args={[500, 5000, 50]} />
        <meshStandardMaterial attach='material' metalness={0.5} color='black' />
      </mesh>
      {Array(20).fill(0).map((_, i) => (
        <VLight
          reference={leftWall.current[i]}
          key={i}
          position={[-20, 3, -(i) * 2]} />
      ))}
      {Array(20).fill(0).map((_, i) => (
        <VLight
          reference={rightWall.current[i]}
          key={i}
          invert
          position={[20, 3, -(i) * 2]} />
      ))}
      <EffectComposer disableNormalPass>
        <SelectiveBloom
          mipmapBlur
          selection={[...leftWall.current as any, ...rightWall.current as any]}
          luminanceThreshold={.001}
          intensity={10}
        />
      </EffectComposer>
    </Suspense>
  )
}
import { Bloom, SelectiveBloom } from '@react-three/postprocessing'
import React, { Suspense, useRef } from 'react'
import { Mesh } from 'three'

export default function Cube() {
  const ref = useRef<Mesh>(new Mesh());
  return (
    <Suspense>
      <mesh ref={ref} rotation={[-Math.PI / 10, Math.PI / 4, 0]} position={[0, 5, -50]}>
        <boxGeometry attach='geometry' args={[15, 15, 15]} />
        <meshStandardMaterial
          attach='material'
          roughness={0}
          metalness={1}
          // color='black'
        />
      </mesh>
    </Suspense>
  )
}
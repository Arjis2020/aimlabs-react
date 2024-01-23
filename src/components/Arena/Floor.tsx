import React, { Suspense } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three';
import floorTexture from '../../assets/textures/grid-texture.png';

export default function Floor() {
  const texture = useTexture(floorTexture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 5;
  texture.repeat.y = 70;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]} receiveShadow>
        <planeGeometry attach='geometry' args={[250, 1000, 50]} />
        <meshStandardMaterial attach='material' metalness={1} color='black' />
      </mesh>
    </Suspense>
  )
}
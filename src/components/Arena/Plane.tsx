import React, { Suspense } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three';
import floorTexture from '../../assets/textures/floor-texture.jpg';

export default function Plane() {
  const texture = useTexture(floorTexture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 50;
  texture.repeat.y = 10;

  return (
    <Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
        <planeGeometry attach='geometry' args={[2000, 500, 50]} />
        <meshBasicMaterial attach='material' map={texture} />
      </mesh>
    </Suspense>
  )
}
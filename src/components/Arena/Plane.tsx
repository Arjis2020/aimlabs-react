import React, { Suspense } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three';
import floorTexture from '../../assets/textures/grid-texture.png';

export default function Plane() {
  const texture = useTexture(floorTexture);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 5;
  texture.repeat.y = 70;

  return (
    <Suspense>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
        <planeGeometry attach='geometry' args={[800, 5000, 50]} />
        <meshBasicMaterial attach='material' map={texture} transparent/>
      </mesh>
    </Suspense>
  )
}
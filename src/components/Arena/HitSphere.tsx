import React, { Suspense } from 'react';
import { extend } from '@react-three/fiber';
import { SphereGeometry } from 'three';
import { useTexture } from '@react-three/drei';
import ballTexture from '../../assets/textures/criss-cross-texture.png';

extend({
  SphereGeometry
});

export default function HitSphere() {
  const texture = useTexture(ballTexture);
  return (
    <Suspense fallback={null}>
      <mesh castShadow position={[0, 1, 0]}>
        <sphereGeometry attach='geometry' args={[0.4, 50, 50]} />
        <meshLambertMaterial attach='material' color="blue" opacity={30} transparent />
      </mesh>
    </Suspense>
  )
}
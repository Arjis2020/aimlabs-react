import React, { Suspense, useRef } from 'react';
import { extend } from '@react-three/fiber';
import { Mesh, SphereGeometry } from 'three';

extend({
  SphereGeometry
});

type TProps = {
  position?: [number, number, number],
};

export default function HitSphere(props: TProps) {
  const sphereRef = useRef<Mesh>(new Mesh());
  return (
    <Suspense fallback={null}>
      <mesh ref={sphereRef} position={props.position || [0, 0, 0]}>
        <sphereGeometry attach='geometry' args={[0.12, 50, 50]} />
        <meshStandardMaterial attach='material' color='orange' />
      </mesh>
    </Suspense>
  )
}
import React, { useRef } from 'react';
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { useThree } from '@react-three/fiber';
import { BufferGeometry, DirectionalLight, Material, Mesh, NormalBufferAttributes, Object3DEventMap, PointLight, PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

type TProps = {
  position: [number, number, number];
  reference: any;
  invert?: boolean;
}

export default function VLight(props: TProps) {
  return (
    <>
      <mesh ref={props.reference} position={props.position} rotation={[0, (props.invert ? -1 : 1) * (Math.PI / 2), 0]} receiveShadow>
        <planeGeometry attach='geometry' args={[.05, 15]} />
        <meshStandardMaterial
          emissive="#FF178B"
          emissiveIntensity={2}
        />
      </mesh>
    </>
  )
}
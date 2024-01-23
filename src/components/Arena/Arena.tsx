import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import HitSphere from './HitSphere';
import './arena.scss';
import { OrbitControls, Sky } from '@react-three/drei';
import CameraControls from './CameraControls';
import Floor from './Floor';
import Walls from './Walls';
import Cube from './Cube';
import * as THREE from 'three';
import { DirectionalLightHelper } from 'three';

export default function Arena() {
  return (
    <Canvas
      // linear
      className='arena__canvas'
      shadows
      style={{
        height: '100vh',
        width: '100vw',
      }}
      dpr={[1, 2]}
    // camera={{
    //   fov: 90,
    //   far: 0,
    // }}
    >
      {/* <ambientLight intensity={1} /> */}
      <CameraControls />
      <Floor />
      <Cube />
      <HitSphere />
      <Walls />
      <directionalLight
        rotation={[0, -Math.PI / 2, 0]}
        position={[-15, 30, -10]}
        intensity={4}
        color='#171BFF' />
      <directionalLight position={[15, 30, -10]} intensity={4} color='#171BFF' />

      <directionalLight
        position={[200, 2, -50]}
        rotation={[0, -Math.PI / 2, 0]}
        color='#FF178B'
        intensity={7} />
      <directionalLight
        position={[-200, 2, -50]}
        rotation={[0, Math.PI / 2, 0]}
        color='#FF178B'
        intensity={7} />
      <OrbitControls
        maxAzimuthAngle={90}
        enablePan={false}
        enableRotate={false}
        enableZoom={false} />
      <fog
        attach='fog'
        args={['black', 1, 500]}
      />
    </Canvas>
  )
}
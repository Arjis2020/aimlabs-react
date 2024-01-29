import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CameraControls from './CameraControls';
import { Scene } from './Scene';
import './arena.scss';
import HitSphere from './HitSphere';

export default function Arena() {
  return (
    <Canvas
      className='arena__canvas'
      shadows
      style={{
        height: '100vh',
        width: '100vw',
      }}
      dpr={[1, 2]}
      camera={{
        fov: 70,
        position: [0, -0.68, -5],
      }}
    >
      <CameraControls />
      <OrbitControls
        maxAzimuthAngle={90}
        enablePan={false}
        enableRotate={false}
        enableZoom={false} />
      <fog
        attach='fog'
        args={['red', 1, 10]}
      />
      <ambientLight intensity={1} />
      <pointLight intensity={15} color='#FDD8C4' />
      <pointLight intensity={18} position={[0, -1, 0]} color='#FFE3BD' />
      <directionalLight intensity={10} position={[0, 0, -2]} color='#FB6C52' />
      <Scene />
      <HitSphere />
      <HitSphere position={[-0.4, 0, 0]} />
      <HitSphere position={[0.4, 0, 0]} />
      <HitSphere position={[0, -0.4, 0]} />
      <HitSphere position={[0, 0.4, 0]} />
      <HitSphere position={[-0.4, 0.4, 0]} />
      <HitSphere position={[-0.4, -0.4, 0]} />
      <HitSphere position={[0.4, -0.4, 0]} />
      <HitSphere position={[0.4, 0.4, 0]} />
    </Canvas>
  )
}
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import HitSphere from './HitSphere';
import './arena.scss';
import { OrbitControls, Sky } from '@react-three/drei';
import CameraControls from './CameraControls';
import Plane from './Plane';

export default function Arena() {
  return (
    <Canvas
      className='arena__canvas'
      shadows
      style={{
        height: '100vh',
        width: '100vw',
      }}
      camera={{
        fov: 90,
        far: 0,
      }}
    >
      <CameraControls />
      <ambientLight intensity={1} />
      <directionalLight position={[15, 30, -10]} intensity={10} />
      <Plane />
      <HitSphere />
      <OrbitControls
        maxAzimuthAngle={90}
        enablePan={false}
        enableRotate={false}
        enableZoom={false} />
      <Sky
        distance={500000}
        sunPosition={[15, 30, -10]}
        inclination={0}
        azimuth={0.25} />
    </Canvas>
  )
}
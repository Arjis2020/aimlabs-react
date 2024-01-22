import React from 'react'
import { useFrame, useThree } from '@react-three/fiber'

export default function CameraControls() {
  const camera = useThree((state) => state.camera);
  useFrame((state) => {
    camera.rotateY(-state.pointer.x);
    camera.rotateX(state.pointer.y);
  });
  return (
    <></>
  )
}
import React from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three';

export default function CameraControls() {
  const camera = useThree((state) => state.camera);
  const sensitivity = 0.47;
  useFrame((state) => {
    const cameraTarget = new Vector3(0, -0.25, -2);
    camera.position.lerp(cameraTarget, .02);
    cameraTarget.setY(-0.1);
    camera.rotateY(-state.pointer.x * sensitivity);
    camera.rotateX(state.pointer.y * sensitivity);
  });
  return <></>;
}
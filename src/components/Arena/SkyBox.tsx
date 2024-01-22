import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber'
import * as THREE from 'three';
import skyboxTexture from '../../assets/textures/blue-starry-skybox.jpg';

export default function SkyBox() {
  const loader = new THREE.TextureLoader;
  const { scene } = useThree();
  useEffect(() => {
    const texture = loader.load(skyboxTexture, () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    })
  }, [scene]);
  return <></>;
}
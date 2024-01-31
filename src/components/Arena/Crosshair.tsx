import { Line } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { Sprite, Vector3 } from 'three'

type Props = {}

export default function Crosshair({ }: Props) {
  const topOuterLine = useRef<HTMLDivElement>(null);
  const bottomOuterLine = useRef<HTMLDivElement>(null);
  const leftOuterLine = useRef<HTMLDivElement>(null);
  const rightOuterLine = useRef<HTMLDivElement>(null);
  const crosshairRoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topOuterLine.current) {
      topOuterLine.current.style.top = '-5px';
      topOuterLine.current.style.transform = 'translate(-50%, -100%)';
      topOuterLine.current.style.width = '2px';
      topOuterLine.current.style.height = '20px';
    }
    if (bottomOuterLine.current) {
      bottomOuterLine.current.style.top = '-5px';
      bottomOuterLine.current.style.transform = 'translate(-50%, 50%)';
      bottomOuterLine.current.style.width = '2px';
      bottomOuterLine.current.style.height = '20px';
    }
    if (leftOuterLine.current) {
      leftOuterLine.current.style.transform = 'translate(-120%, -50%)';
      leftOuterLine.current.style.width = '20px';
      leftOuterLine.current.style.height = '2px';
    }
    if (rightOuterLine.current) {
      rightOuterLine.current.style.transform = 'translate(20%, -50%)';
      rightOuterLine.current.style.width = '20px';
      rightOuterLine.current.style.height = '2px';
    }
  }, [crosshairRoot, topOuterLine, leftOuterLine, rightOuterLine, bottomOuterLine]);
    
  return (
    <div className='crosshair' ref={crosshairRoot}>
      <div className='crosshair__center-dot' />
      <div className='crosshair__outer-line' ref={topOuterLine} />
      <div className='crosshair__outer-line' ref={bottomOuterLine} />
      <div className='crosshair__outer-line' ref={leftOuterLine} />
      <div className='crosshair__outer-line' ref={rightOuterLine} />
    </div>
  )
}
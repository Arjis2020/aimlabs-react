import React from 'react'
import useSound from 'use-sound';
import video from '../../assets/videos/main-menu.mp4';
import hoverSfx from '../../assets/sounds/menu/hover.mp3';
import { useMainMenu } from './useMainMenu';
import './mainMenu.scss';

export default function MainMenu() {
  useMainMenu();
  const [play] = useSound(hoverSfx, { volume: 1, playbackRate: 2 });
  const menuItems = ['Play', 'How to play', 'Options', 'Settings', 'Exit'];
  return (
    <div className='main-menu'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>
      <div className='main-menu__content'>
        <ul>
          {menuItems.map((item, i) => <li key={item} onMouseEnter={() => play()} style={{ animationDelay: `${10 * (i * 10)}ms` }}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}
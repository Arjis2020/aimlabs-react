import React from 'react'
import video from '../../assets/videos/main-menu.mp4';
import './mainMenu.scss';

export default function MainMenu() {
  return (
    <div className='main-menu'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>
      <div className='main-menu__content'>
        <ul>
          <li>Play</li>
          <li>How to play</li>
          <li>Options</li>
          <li>Settings</li>
          <li>Exit</li>
        </ul>
      </div>
    </div>
  )
}
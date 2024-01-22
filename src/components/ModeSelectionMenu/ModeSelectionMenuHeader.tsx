import React, { useState } from 'react'
import useSound from 'use-sound';
import HoverSound from '../../assets/sounds/menu/hover.mp3';

export default function ModeSelectionMenuHeader() {
  const navigations = ['Unranked', 'Ranked', 'Training'];
  const [play] = useSound(HoverSound, { playbackRate: 2 });
  const [active, setActive] = useState<number>(0);
  return (
    <header className='mode-selection-menu__header'>
      <div className='mode-selection-menu__header__back-nav'>PLAY</div>
      <div className='mode-selection-menu__header__nav-container'>
        <ul>
          {navigations.map((nav, i) => <li
            key={nav}
            className={i === active ? 'active' : ''}
            onMouseEnter={() => i !== active && play()}
            onClick={() => setActive(i)}
          >
            <span className='anim-slide-top' style={{
              animationDelay: `${10 * (i * 10)}ms`,
            }}>{nav}</span>
          </li>)}
        </ul>
      </div>
    </header>
  )
}
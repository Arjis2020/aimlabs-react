import React, { useState } from 'react'
import useSound from 'use-sound';
import HoverSound from '../../assets/sounds/menu/hover.mp3';

export default function ModeSelectionMenuHeader() {
  const navigations = ['Unranked', 'Ranked', 'Training'];
  const [play] = useSound(HoverSound, { playbackRate: 2 });
  const [active, setActive] = useState<number>(0);
  return (
    <header className='mode-selection-menu__header'>
      <div className='mode-selection-menu__header__back-nav'>Back</div>
      <div className='mode-selection-menu__header__nav-container'>
        <ul>
          {navigations.map((nav, i) => <li
            {...i === active && { className: 'active' }}
            onMouseEnter={() => play()}
            onClick={() => setActive(i)}
          >
            {nav}
          </li>)}
        </ul>
      </div>
    </header>
  )
}
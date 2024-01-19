import React from 'react'
import useSound from 'use-sound';
import AccuracyIcon from '../../assets/icons/accuracy.svg';
import CrosshairIcon from '../../assets/icons/crosshair-on-circle.svg';
import CircleIcon from '../../assets/icons/circle.svg';
import SpeedIcon from '../../assets/icons/speed.svg';
import ModeSelectionMenuHeader from './ModeSelectionMenuHeader';
import hoverSoftCut from '../../assets/sounds/menu/hover-soft-cut.mp3';
import './modeSelectionMenu.scss';

export default function ModeSelectionMenu() {
  const [play] = useSound(hoverSoftCut, { volume: 0.5, playbackRate: 1.5 });
  return (
    <div className='mode-selection-menu'>
      <ModeSelectionMenuHeader />
      <div className='mode-selection-menu__card-container anim-fade-zoom-in anim-delay-500ms' onMouseEnter={() => play()}>
        <div className='mode-selection-menu__card-container__card mode-selection-menu__card-container__card--accuracy'>
          <div className='mode-selection-menu__card-container__card__img-container mode-selection-menu__card-container__card--accuracy__img-container'>
            <img src={AccuracyIcon} />
          </div>
          <div className='mode-selection-menu__card-container__card__details-container'>
            <h3>Accuracy</h3>
            <p>Train to hit targets seamlessly without missing a single one. This mode is suitable if you are missing a lot of your shots in game.</p>
          </div>
        </div>
      </div>
      <div className='mode-selection-menu__card-container anim-fade-zoom-in' onMouseEnter={() => play()}>
        <div className='mode-selection-menu__card-container__card mode-selection-menu__card-container__card--tracking'>
          <div className='mode-selection-menu__card-container__card__img-container mode-selection-menu__card-container__card--tracking__img-container'>
            <img src={CircleIcon} />
            <img src={CrosshairIcon} />
          </div>
          <div className='mode-selection-menu__card-container__card__details-container'>
            <h3>Tracking</h3>
            <p>Develop target tracking with this mode. Train with moving targets instead of just spraying and praying.</p>
          </div>
        </div>
      </div>
      <div className='mode-selection-menu__card-container anim-fade-zoom-in anim-delay-500ms' onMouseEnter={() => play()}>
        <div className='mode-selection-menu__card-container__card mode-selection-menu__card-container__card--speed'>
          <div className='mode-selection-menu__card-container__card__img-container mode-selection-menu__card-container__card--speed__img-container'>
            <img src={SpeedIcon} className="img-max" />
          </div>
          <div className='mode-selection-menu__card-container__card__details-container'>
            <h3>Speed</h3>
            <p>Improve reaction time with this mode. Very effective if you are get shot first even if you spotted the enemy first in game.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
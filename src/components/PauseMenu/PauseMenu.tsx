import React from 'react'
import Modal from '../Modal/Modal'
import './pauseMenu.scss';

export default function PauseMenu() {
  return (
    <Modal>
      <div className='main-menu'>
        <ul className='main-menu__list'>
          <li>Play</li>
          <li>How to play</li>
          <li>Options</li>
          <li>Settings</li>
          <li>Exit</li>
        </ul>
      </div>
    </Modal>
  )
}
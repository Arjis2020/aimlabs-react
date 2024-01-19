import React from 'react'
import PauseMenu from '../PauseMenu/PauseMenu';
import { useModalHandler } from './useModalHandler'

export default function ModalHandler() {
  const { modal } = useModalHandler();
  return (
    <>
      {modal.type === 'pause' && modal.isOpen && <PauseMenu />}
    </>
  )
}
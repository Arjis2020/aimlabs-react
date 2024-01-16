import React from 'react'
import MainMenu from '../MainMenu/MainMenu';
import { useModalHandler } from './useModalHandler'

export default function ModalHandler() {
  const { modal } = useModalHandler();
  return (
    <>
      {modal.type === 'main' && modal.isOpen && <MainMenu />}
    </>
  )
}
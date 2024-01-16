import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode | ReactNode[] | string;
}

export default function Modal(props: Props) {
  return (
    <div className='modal'>
      {/* <div className='modal__content'> */}
        {props.children}
      {/* </div> */}
    </div>
  )
}
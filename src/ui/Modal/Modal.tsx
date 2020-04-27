import React, { ReactNode } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = props => {
  const { isOpen, children } = props

  if (isOpen) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.modal}>{children}</div>
      </div>
    )
  }
  return null
}

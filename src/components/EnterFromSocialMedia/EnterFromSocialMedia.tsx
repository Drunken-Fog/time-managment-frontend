import React from 'react'
import styles from './EnterFromSocialMedia.module.css'
import { ReactComponent as Google } from '../../assets/images/google.svg'
import { ReactComponent as Vk } from '../../assets/images/vk.svg'

export const EnterFromSocialMedia: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Войти через социальную сеть</p>
      <div className={styles.icons}>
        <Google />
        <Vk />
      </div>
    </div>
  )
}

import React from 'react'
import styles from './EnterFromSocialMedia.module.css'
import { Google, Vk } from '../../assets/images'

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

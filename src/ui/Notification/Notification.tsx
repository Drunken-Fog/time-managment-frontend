import React from 'react'
import styles from './Notification.module.css'
import { Timer, Pause, Play } from '../../assets/icons'

type NotificationProps = {
  title?: string
  cycle?: string | number
  currentTime?: string
  totalTime?: string
  isActive?: boolean
  onClick?: (arg0: () => boolean) => void
}

export const Notification: React.FC<NotificationProps> = props => {
  const {
    title = 'Уведомления',
    cycle = 1,
    currentTime = '15:14',
    totalTime = '25',
    isActive = true,
    onClick,
  } = props

  const handleChange = (isActive: boolean): void => {
    onClick && onClick(() => !isActive)
  }
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div>
        <div className={styles.timer}>
          <Timer />
        </div>
        <div>
          <h3>Текущий таймер</h3>
          <p>
            {cycle
              ? `${cycle} цикл: ${currentTime ? currentTime : '0'} / ${
                  totalTime ? totalTime : '0'
                }`
              : 'Таймер отсутствует'}
          </p>
        </div>
        {isActive ? (
          <Pause onClick={() => handleChange(isActive)} />
        ) : (
          <Play onClick={() => handleChange(isActive)} />
        )}
      </div>
    </div>
  )
}

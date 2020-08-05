import React from 'react'
import styles from './ProgressBlock.module.css'
import { Star } from '../../assets/icons'

type Props = {
  level: string | number
  currentStars: string | number
  totalStars: string | number
  progressImage?: React.ReactNode
  progressLine: React.ReactNode
}

export const ProgressBlock: React.FC<Props> = props => {
  const {
    level = 1,
    currentStars,
    totalStars,
    progressImage,
    progressLine,
  } = props

  function renderStars(
    currentStars: number | string,
    totalStars: number | string
  ): React.ReactNode | null {
    const incorrectStarsValue =
      currentStars > totalStars || (currentStars === 0 && totalStars === 0)
    if (incorrectStarsValue) {
      return null
    }
    return (
      <>
        <div>{`${currentStars} / ${totalStars}`}</div>
        <Star />
      </>
    )
  }

  return (
    <div className={styles.wrapper}>
      {progressImage}
      <div>
        {level && <h2>{level} Уровень</h2>}
        <div className={styles.lineWrapper}>{progressLine}</div>
        <div className={styles.stats}>
          {renderStars(currentStars, totalStars)}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './ProgressLine.module.css'

type ProgressLineProps = {
  total: number
  value: number
  width?: number | string
  height?: number | string
}

function isNotCorrect(value: number, total: number): boolean {
  return value > total || value < 0 || total < 0 || total === 0
}

export const ProgressLine: React.FC<ProgressLineProps> = props => {
  const { total, value, width, height } = props

  if (isNotCorrect(value, total)) return null

  return (
    <div className={styles.bar} style={{ width, height }}>
      <div
        className={styles.line}
        style={{ width: (100 * value) / total + '%' }}
      ></div>
    </div>
  )
}

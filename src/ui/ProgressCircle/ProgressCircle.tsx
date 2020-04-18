import React from 'react'
import styles from './ProgressCircle.module.css'

type ProgressCircleProps = {
  size?: number
  value?: number
  max?: number
}

export const ProgressCircle: React.FC<ProgressCircleProps> = props => {
  const { size = 60, value = 73, max = 100 } = props

  const radius = size / 2 - 10
  const circumference = 2 * Math.PI * radius

  return (
    <div>
      <svg
        className={styles.wrapper}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs xmlns='http://www.w3.org/2000/svg'>
          <filter
            id='filter0_d'
            x='0'
            y='0'
            width={size}
            height={size}
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='5' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.482353 0 0 0 0 0.396078 0 0 0 0 0.909804 0 0 0 1 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow'
              result='shape'
            />
          </filter>
        </defs>
        <circle
          className={styles.backgroundCircle}
          strokeWidth='5'
          fill='transparent'
          cx={size / 2}
          cy={size / 2}
          r={radius}
        ></circle>
        <circle
          filter='url(#filter0_d)'
          className={styles.circle}
          strokeWidth='5'
          fill='transparent'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={circumference - (value * circumference) / max}
        ></circle>
        <text
          className={styles.text}
          textAnchor='middle'
          alignmentBaseline='middle'
          x={size}
          y={size + 2}
        >
          3
        </text>
      </svg>
    </div>
  )
}

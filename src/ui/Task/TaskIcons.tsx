import React from 'react'
import styles from './TaskInfoIcons.module.css'
import { ErrorIcon, Timer } from '../../assets/icons'
import { taskStatus } from '../../types'
import cn from 'classnames'

export type TaskIconsProps = {
  status?: taskStatus
  urgently?: boolean | string
  important?: boolean | string
}

export const TaskIcons: React.FC<TaskIconsProps> = props => {
  const { status, urgently, important } = props

  const hasNotIcons = !urgently && !important

  if (hasNotIcons) {
    return null
  }

  function renderIcons(
    urgently: boolean | string | undefined,
    important: boolean | string | undefined
  ): React.ReactNode {
    if (urgently && important) {
      return (
        <>
          <Timer />
          <ErrorIcon />
        </>
      )
    } else if (urgently) {
      return <Timer />
    }
    return <ErrorIcon />
  }

  const isIconAlone = !urgently || !important
  const classes = cn(
    styles.wrapper,
    styles[status!],
    isIconAlone && styles.standAlone
  )

  return <div className={classes}>{renderIcons(urgently, important)}</div>
}

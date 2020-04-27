import React from 'react'
import styles from './TaskIcons.module.css'
import { ErrorIcon, Timer } from '../../assets/icons'
import { TaskStatus } from '../../types'
import cn from 'classnames'

export type TaskIconsProps = {
  status?: TaskStatus
  urgent?: boolean | string
  important?: boolean | string
}

export const TaskIcons: React.FC<TaskIconsProps> = props => {
  const { status, urgent, important } = props

  const hasNotIcons = !urgent && !important

  if (hasNotIcons) {
    return null
  }

  function renderIcons(
    urgent: boolean | string | undefined,
    important: boolean | string | undefined
  ): React.ReactNode {
    if (urgent && important) {
      return (
        <>
          <Timer />
          <ErrorIcon />
        </>
      )
    } else if (urgent) {
      return <Timer />
    }
    return <ErrorIcon />
  }

  const isIconAlone = !urgent || !important
  const classes = cn(
    styles.wrapper,
    styles[status!],
    isIconAlone && styles.standAlone
  )

  return <div className={classes}>{renderIcons(urgent, important)}</div>
}

import React from 'react'
import styles from './TaskInfoIcons.module.css'
import { ErrorIcon, Timer } from '../../assets/icons'

type taskStatus = 'success' | 'warning' | 'inProgress'

type Props = {
  taskStatus?: taskStatus
  urgently?: boolean | string
  important?: boolean | string
}

export const TaskInfoIcons: React.FC<Props> = props => {
  const { taskStatus, urgently, important } = props
  const wrapperClass = [styles.wrapper]

  const hasNotIcons = !urgently && !important
  const isIconAlone = !urgently || !important

  if (hasNotIcons) {
    return null
  }

  if (isIconAlone) {
    wrapperClass.push(styles.standAlone)
  }

  switch (taskStatus) {
    case 'success':
      wrapperClass.push(styles.success)
      break
    case 'warning':
      wrapperClass.push(styles.warning)
      break
    case 'inProgress':
      wrapperClass.push(styles.inProgress)
      break
    default:
      break
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

  return (
    <>
      <div className={wrapperClass.join(' ')}>
        {renderIcons(urgently, important)}
      </div>
    </>
  )
}

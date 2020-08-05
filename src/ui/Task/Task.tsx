import React from 'react'
import styles from './Task.module.css'
import { TaskIcons, TaskIconsProps } from './TaskIcons'
import { TaskStatusLine } from './TaskStatusLine'
import { TaskStatus } from '../../types'

type TaskProps = {
  name: string
  status: TaskStatus
}

export const Task: React.FC<TaskProps & TaskIconsProps> = props => {
  const { name, status = 'active', urgent, important } = props

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <span>{name}</span>
        <TaskIcons status={status} urgent={urgent} important={important} />
      </div>
      <TaskStatusLine status={status} />
    </div>
  )
}

import React from 'react'
import styles from './Task.module.css'
import { TaskIcons, TaskIconsProps } from './TaskIcons'
import { TaskStatusLine } from './TaskStatusLine'
import { taskStatus } from '../../types'

type TaskProps = {
  name: string
  status: taskStatus
}

export const Task: React.FC<TaskProps & TaskIconsProps> = props => {
  const { name, status, urgently, important } = props
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <span>{name}</span>
        <TaskIcons status={status} urgently={urgently} important={important} />
      </div>
      <TaskStatusLine status={status} />
    </div>
  )
}

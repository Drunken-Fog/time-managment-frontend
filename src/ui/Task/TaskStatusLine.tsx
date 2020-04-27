import React from 'react'
import styles from './TaskStatusLine.module.css'
import { TaskStatus } from '../../types'

type TaskStatusLineProps = {
  status: TaskStatus
}

export const TaskStatusLine: React.FC<TaskStatusLineProps> = ({ status }) => {
  return <div className={styles[status]}></div>
}

import React from 'react'
import styles from './TaskStatusLine.module.css'
import { taskStatus } from '../../types'

type TaskStatusLineProps = {
  status: taskStatus
}

export const TaskStatusLine: React.FC<TaskStatusLineProps> = ({ status }) => {
  return <div className={styles[status]}></div>
}

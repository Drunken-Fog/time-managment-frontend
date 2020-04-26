import React, { ReactNode } from 'react'
import styles from './LastTasksBlock.module.css'
import { ProgressCircle, Task, Button } from '../../ui'
import { NoTasksImage } from '../../assets/images'
import { UserType, TaskType } from '../../types'

type LastTasksBlockProps = {
  user: UserType
  tasks: TaskType[]
}

export const LastTasksBlock: React.FC<LastTasksBlockProps> = props => {
  const { user, tasks } = props
  const hasTasks = Boolean(tasks.length)

  return (
    <div className={styles.block}>
      <div className={styles.account}>
        <ProgressCircle
          max={user.levelStars}
          value={user.stars}
          level={user.level}
        />
        {user.username}
      </div>
      <h1 className={styles.title}>Последние задачи</h1>
      <div className={styles.tasks}>
        {hasTasks ? <TasksBlock tasks={tasks} /> : <NoTasksBlock />}
      </div>
    </div>
  )
}

type TasksBlockProps = {
  tasks: TaskType[]
}

const TasksBlock: React.FC<TasksBlockProps> = props => {
  const { tasks } = props
  function renderTasks(tasks: TaskType[]): ReactNode {
    return tasks.map(task => (
      <Task
        key={task.name}
        status={task.status}
        name={task.name}
        urgent={task.urgent}
        important={task.important}
      />
    ))
  }

  return (
    <>
      <div className={styles.list}>{renderTasks(tasks)}</div>
      <div className={styles.buttons}>
        <Button size='small'>Список задач</Button>
        <Button size='small'>Добавить</Button>
      </div>
    </>
  )
}

const NoTasksBlock: React.FC = () => (
  <>
    <NoTasksImage />
    <div>Создайте свою первую задачу!</div>
    <Button size='large'>Добавить</Button>
  </>
)

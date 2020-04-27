import React, { ReactNode } from 'react'
import styles from './LastTasksBlock.module.css'
import { ProgressCircle, Task, Button } from '../../ui'
import { NoTasksImage } from '../../assets/images'
import { UserType, TaskType } from '../../types'

type LastTasksBlockProps = {
  user: UserType
  tasks: TaskType[]
  toggleModal: (arg0: boolean) => void
}

export const LastTasksBlock: React.FC<LastTasksBlockProps> = props => {
  const { user, tasks, toggleModal } = props
  const hasTasks = tasks && tasks.length

  function openModal() {
    toggleModal(true)
  }

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
        {hasTasks ? (
          <TasksBlock tasks={tasks} openModal={openModal} />
        ) : (
          <NoTasksBlock openModal={openModal} />
        )}
      </div>
    </div>
  )
}

type TasksBlockProps = {
  tasks: TaskType[]
  openModal?: () => void
}

const TasksBlock: React.FC<TasksBlockProps> = props => {
  const { tasks, openModal } = props

  function renderTasks(tasks: TaskType[]): ReactNode {
    return tasks.map(task => (
      <Task
        key={`${task.name}/${task.name + Math.random()} `}
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
        <Button size='small' onClick={openModal}>
          Добавить
        </Button>
      </div>
    </>
  )
}

type NoTasksBlockProps = {
  openModal?: () => void
}

const NoTasksBlock: React.FC<NoTasksBlockProps> = props => {
  const { openModal } = props
  return (
    <>
      <NoTasksImage />
      <div>Создайте свою первую задачу!</div>
      <Button size='large' onClick={openModal}>
        Добавить
      </Button>
    </>
  )
}

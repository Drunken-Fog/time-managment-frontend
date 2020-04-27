import React, { useEffect, useCallback } from 'react'
import {
  ProgressBlock,
  LastTasksBlock,
  Building,
  CreateTaskModal,
} from '../components'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProfileStart,
  fetchTasksStart,
  toggleCreateTaskModal,
  taskCreate,
} from '../store/app/actions'
import { ProgressLine } from '../ui'
import styles from './HomePage.module.css'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const state = useSelector(state => state.appReducer)
  const {
    level,
    levelStars,
    stars,
    username,
    tasks,
    createTaskModalIsOpen,
  } = state

  const fetchProfile = useCallback(() => {
    const uid: any = localStorage.getItem('uid')
    dispatch(fetchProfileStart(uid))
  }, [dispatch])

  const fetchTasks = useCallback(() => {
    const uid: any = localStorage.getItem('uid')
    dispatch(fetchTasksStart(uid))
  }, [dispatch])

  // toggle modal
  const toggleModal = useCallback(
    isOpen => {
      dispatch(toggleCreateTaskModal(isOpen))
    },
    [dispatch]
  )

  const createTask = useCallback(
    (arg0: any) => {
      const uid: any = localStorage.getItem('uid')
      dispatch(taskCreate(uid, arg0))
    },
    [dispatch]
  )

  useEffect(() => {
    fetchProfile()
    fetchTasks()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.progressSection}>
        <div className={styles.building}>
          <Building level={level} width={700} height={400} />
        </div>
        <ProgressBlock
          level={level}
          currentStars={stars}
          totalStars={levelStars}
          progressLine={<ProgressLine total={levelStars} value={stars} />}
        />
      </div>
      <LastTasksBlock
        user={{ username, levelStars, stars, level }}
        tasks={tasks}
        toggleModal={toggleModal}
      />
      <CreateTaskModal
        createTask={createTask}
        modalIsOpen={createTaskModalIsOpen}
        toggleModal={toggleModal}
      />
    </div>
  )
}

import React, { useEffect, useCallback } from 'react'
import { ProgressBlock, LastTasksBlock, Building } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfileStart, fetchTasksStart } from '../store/app/actions'
import { ProgressLine } from '../ui'
import styles from './HomePage.module.css'

export const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const state = useSelector(state => state.appReducer)
  const { level, levelStars, stars, username, tasks } = state

  const fetchProfile = useCallback(() => {
    const uid: any = localStorage.getItem('uid')
    dispatch(fetchProfileStart(uid))
  }, [dispatch])

  const fetchTasks = useCallback(() => {
    const uid: any = localStorage.getItem('uid')
    dispatch(fetchTasksStart(uid))
  }, [dispatch])

  useEffect(() => {
    fetchProfile()
    fetchTasks()
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.progressSection}>
        <div className={styles.building}>
          <Building
            level={level}
            width={700}
            height={400}
          />
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
      />
    </div>
  )
}

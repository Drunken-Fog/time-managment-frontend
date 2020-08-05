import React from 'react'
import { TaskIcons } from './TaskIcons'

export default { title: 'TaskInfoIcons', component: TaskIcons }

export const StatusColors = function() {
  return (
    <>
      <TaskIcons status='active' urgent important />
      <TaskIcons status='stopped' urgent important />
      <TaskIcons status='completed' urgent important />
    </>
  )
}

export const StandAlone = function() {
  return (
    <>
      <TaskIcons status='active' urgent />
      <TaskIcons status='completed' important />
    </>
  )
}

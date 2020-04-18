import React from 'react'
import { TaskIcons } from './TaskIcons'

export default { title: 'TaskInfoIcons', component: TaskIcons }

export const StatusColors = function() {
  return (
    <>
      <TaskIcons status='success' urgently important />
      <TaskIcons status='danger' urgently important />
      <TaskIcons status='inProgress' urgently important />
    </>
  )
}

export const StandAlone = function() {
  return (
    <>
      <TaskIcons status='success' urgently />
      <TaskIcons status='success' important />
    </>
  )
}

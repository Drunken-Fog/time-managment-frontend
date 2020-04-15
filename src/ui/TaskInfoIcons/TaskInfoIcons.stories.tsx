import React from 'react'
import { TaskInfoIcons } from '.'

export default { title: 'TaskInfoIcons', component: TaskInfoIcons }

export const StatusColors = function() {
  return (
    <>
      <TaskInfoIcons taskStatus='success' urgently important />
      <TaskInfoIcons taskStatus='warning' urgently important />
      <TaskInfoIcons taskStatus='inProgress' urgently important />
    </>
  )
}

export const StandAlone = function() {
  return (
    <>
      <TaskInfoIcons taskStatus='success' urgently />
      <TaskInfoIcons taskStatus='success' important />
    </>
  )
}

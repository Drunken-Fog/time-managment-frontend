export type TaskStatus = 'active' | 'completed' | 'stopped'
export type UserType = {
  username: string
  level: number
  stars: number
  levelStars: number
}
export type TaskType = {
  owner: string
  name: string
  description: string
  important: boolean
  urgent: boolean
  currentDuration: number
  cycles: number
  status: TaskStatus
}

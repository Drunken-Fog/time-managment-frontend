import React, { ReactNode } from 'react'
import styles from './FormBox.module.css'

type Props = {
  title: string
  form: ReactNode
  bottom: ReactNode
}

export const FormBox: React.FC<Props> = props => {
  const { title, form, bottom } = props

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      {form}
      <span className={styles.bottom}>{bottom}</span>
    </div>
  )
}

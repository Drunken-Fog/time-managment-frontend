import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Subtext.module.css'

type Props = {
  text: string
  link: string
  linkTitle: string
}

export const Subtext: React.FC<Props> = props => {
  const { text, link, linkTitle } = props
  return (
    <p className={styles.text}>
      {text} <NavLink to={link}>{linkTitle}</NavLink>
    </p>
  )
}

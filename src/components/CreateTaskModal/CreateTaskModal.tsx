import React from 'react'
import styles from './CreateTaskModal.module.css'
import { Modal } from '../../ui/Modal'
import { Field, Button } from '../../ui'

export const CreateTaskModal: React.FC = () => {
  return (
    <Modal isOpen={true}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Создание задачи</h1>
        <Field className={styles.input} id='task' placeholder='Текст задачи' />
        <div className={styles.checkboxes}>
          <input type='checkbox' name='important' id='important' />
          <label htmlFor='important'>Важная</label>
          <input type='checkbox' name='urgent' id='urgent' />
          <label htmlFor='urgent'>Срочная</label>
        </div>
        <div className={styles.buttons}>
          <Button width='47%'>Создать</Button>
          <Button width='47%' type='danger'>
            Отменить
          </Button>
        </div>
      </div>
    </Modal>
  )
}

import React, { useState } from 'react'
import styles from './CreateTaskModal.module.css'
import { Modal } from '../../ui/Modal'
import { Field, Button, Checkbox } from '../../ui'

type CreateTaskModalProps = {
  modalIsOpen: boolean
  toggleModal: (arg0: boolean) => void
  createTask: (arg0: any) => void
}

export const CreateTaskModal: React.FC<CreateTaskModalProps> = props => {
  const { modalIsOpen, toggleModal, createTask } = props
  function closeModal() {
    toggleModal(false)
  }

  // Todo в один useState...
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskImportant, setTaskImportant] = useState(false)
  const [taskUrgent, setTaskUrgent] = useState(false)

  function submitHandler() {
    try {
      createTask({
        taskName,
        taskDescription,
        taskImportant,
        taskUrgent,
      })

      // toggleModal(false)
    } catch (e) {
      console.error(e)
    }
  }

  function handleTaskNameChange(value: string) {
    setTaskName(value)
  }
  function handleTaskDescriptionChange(value: string) {
    setTaskDescription(value)
  }

  return (
    <Modal isOpen={modalIsOpen}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Создание задачи</h1>
        <Field
          onChange={handleTaskNameChange}
          className={styles.input}
          id='taskName'
          placeholder='Название задачи'
        />
        <Field
          onChange={handleTaskDescriptionChange}
          className={styles.input}
          id='taskDescription'
          placeholder='Описание задачи'
        />
        <div className={styles.checkboxes}>
          <Checkbox
            id='important'
            name='important'
            labelText='Важная'
            onClick={() => setTaskImportant(!taskImportant)}
          />
          <Checkbox
            id='urgent'
            name='urgent'
            labelText='Срочная'
            onClick={() => setTaskUrgent(!taskUrgent)}
          />
        </div>
        <div className={styles.buttons}>
          <Button width='47%' onClick={submitHandler}>
            Создать
          </Button>
          <Button width='47%' type='danger' onClick={closeModal}>
            Отменить
          </Button>
        </div>
      </div>
    </Modal>
  )
}

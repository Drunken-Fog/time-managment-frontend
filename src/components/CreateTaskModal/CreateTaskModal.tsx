import React, { useState } from 'react'
import styles from './CreateTaskModal.module.css'
import { Modal } from '../../ui/Modal'
import { ValidateFields, validateFieldRequire } from '../../utils'
import { Field, Button } from '../../ui'

type FieldErrorsState = { [k: string]: string | boolean } | {}

const taskNameKey = 'taskName' as keyof FieldErrorsState
const taskDescriptionKey = 'taskDescription' as keyof FieldErrorsState

type CreateTaskModalProps = {
  modalIsOpen: boolean
  toggleModal: (arg0: boolean) => void
  createTask: (arg0: any) => void
}

export const CreateTaskModal: React.FC<CreateTaskModalProps> = props => {
  const { modalIsOpen, toggleModal, createTask } = props

  const initialState = {
    taskName: '',
    taskDescription: '',
  }

  let validators = {
    taskName: validateFieldRequire,
    taskDescription: validateFieldRequire,
  }

  function closeModal() {
    toggleModal(false)
    setFieldErrors({})
  }

  const [state, setState] = useState(initialState)
  const [taskImportant, setTaskImportant] = useState<boolean>(false)
  const [taskUrgent, setTaskUrgent] = useState<boolean>(false)
  const [fieldErrors, setFieldErrors] = useState({})

  function submitHandler() {
    try {
      const errors = ValidateFields(state, validators)
      const isErrorsEmpty = Object.keys(errors).length === 0
      setFieldErrors(errors || {})
      if (isErrorsEmpty) {
        createTask({ ...state, taskImportant, taskUrgent })
        setState(initialState)
        setTaskImportant(false)
        setTaskUrgent(false)
      }
      // toggleModal(false)
    } catch (e) {
      console.error(e)
    }
  }

  function handleStateChange(
    name: string,
    value: string,
    validate?: (arg0: string) => void
  ): void {
    try {
      validate?.(value)
      setFieldErrors((errors: any) => {
        const { [name]: omitted, ...rest } = errors
        return rest
      })
    } catch (e) {
      //
    }

    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <Modal isOpen={modalIsOpen}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Создание задачи</h1>
        <Field
          onChange={handleStateChange}
          className={styles.input}
          id='taskName'
          name='taskName'
          value={state.taskName}
          placeholder='Название задачи'
          validate={validateFieldRequire}
          error={fieldErrors[taskNameKey]}
        />
        <Field
          onChange={handleStateChange}
          className={styles.input}
          id='taskDescription'
          name='taskDescription'
          value={state.taskDescription}
          placeholder='Описание задачи'
          validate={validateFieldRequire}
          error={fieldErrors[taskDescriptionKey]}
        />
        <div className={styles.checkboxes}>
          <input
            onChange={() => setTaskImportant(!taskImportant)}
            checked={taskImportant}
            type='checkbox'
            name='important'
            id='important'
          />
          <label htmlFor='important'>Важная</label>
          <input
            onChange={() => setTaskUrgent(!taskUrgent)}
            checked={taskUrgent}
            type='checkbox'
            name='urgent'
            id='urgent'
          />
          <label htmlFor='urgent'>Срочная</label>
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

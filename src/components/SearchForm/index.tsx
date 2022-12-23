import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { ITask } from '../../App'
import styles from './SearchForm.module.css'

interface SearchFormProps {
  onAddNewTask: (title: string) => void;
}

export function SearchForm({ onAddNewTask }: SearchFormProps) {
  const [title, setTitle] = useState<string>('')

  function handleInputTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTitle(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    onAddNewTask(title)
    setTitle('')
  }

  function handleTitleEmpty(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  return (
    <form className={styles.newTaskForm} onSubmit={handleAddNewTask}>
      <input type="text"
        placeholder='Adicione uma nova tarefa'
        onChange={handleInputTitleChange}
        onInvalid={handleTitleEmpty}
        value={title}
        required
      />

      <button>
        Criar
        <PlusCircle size={20} weight='bold' />
      </button>
    </form>
  )
}
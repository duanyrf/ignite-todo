import { FormEvent, useState } from 'react';
import styles from './App.module.css'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { TaskBoard } from './components/TaskBoard'

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}


function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addNewTask(taskTitle: string) {
    setTasks(state => [...state, {
      id: tasks.length + 1,
      title: taskTitle,
      isCompleted: false
    }])
  }

  function deleteTaskById(taskId: number) {
    const listWithoutDeletedTask = tasks.filter(task => task.id !== taskId)

    setTasks(listWithoutDeletedTask)
  }

  function toggleCompletedTaskById(taskId: number) {
    const updatedTaskList = tasks.map(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })

    setTasks(updatedTaskList)
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <SearchForm onAddNewTask={addNewTask} />
        <TaskBoard
          tasks={tasks}
          onDeleteTask={deleteTaskById}
          onToggleTask={toggleCompletedTaskById}
        />
      </main>
    </>
  )
}

export default App

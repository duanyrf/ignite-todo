import { useState } from 'react'
import { ITask } from '../../App'
import clipboardImg from '../../assets/clipboard.svg'
import { Task } from '../Task';
import styles from './TaskBoard.module.css'

interface TaskBoardProps {
  tasks: ITask[];
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function TaskBoard({ tasks, onDeleteTask, onToggleTask }: TaskBoardProps) {
  const totalTasks = tasks.length
  const totalCompleted = tasks.reduce((acc, task) => (
    task.isCompleted ? acc += 1 : acc
  ), 0)

  return (
    <section className={styles.taskBoard}>
      <header>
        <p>
          Tarefas criadas <span>{totalTasks}</span>
        </p>

        <p className={styles.textPurple}>
          Concluídas <span>{totalCompleted} de {totalTasks}</span>
        </p>
      </header>

      <div className={styles.taskList}>
        {
          tasks.length > 0
            ?
            tasks.map(task => (
              <Task key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onToggleTask={onToggleTask}
              />
            ))
            :
            <div className={styles.emptyList}>
              <img src={clipboardImg} alt="Ícone de Lista Vazia" />
              <p>
                <span>Você ainda não tem tarefas cadastradas</span>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
        }
      </div>
    </section>
  )
}

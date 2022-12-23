import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { ITask } from '../../App'
import styles from './Task.module.css'

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function Task({ task, onDeleteTask, onToggleTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onToggleTask(task.id)}>
        {
          task.isCompleted
            ? <CheckCircle size={24} weight='fill' />
            : <Circle size={24} />
        }
      </button>
      <p className={task.isCompleted ? styles.textStroked : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}

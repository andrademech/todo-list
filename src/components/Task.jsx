import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

export function Task({ task, index, handleDeleteTask, handleTaskCompleted }) {
  const [completed, setCompleted] = useState(false);
  return (
    <>
      <div
        className={`${styles.Tasks} ${completed ? styles.clicked : ''}`}
        onClick={() => setCompleted(!completed)}
      >
        <div
          className={`${styles.Check} ${completed ? styles.clicked : ''}`}
          onClick={() => {
            setCompleted(!completed) && handleTaskCompleted();
          }}
        />
        <p className={completed ? styles.Completed : ''}>{task.task}</p>
        <button
          title="Delete task"
          className={styles.Trash}
          onClick={() => handleDeleteTask(index)}
        >
          <div className={styles.TrashIcon}>
            <Trash size={24} color={'#808080'} />
          </div>
        </button>
      </div>
    </>
  );
}

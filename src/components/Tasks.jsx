import { useState } from 'react';
import { Clipboard, Trash } from 'phosphor-react';

//Styles
import styles from './Tasks.module.css';

//Components
import { Button } from './Button';

export function Tasks() {
  const [tasks, setTasks] = useState('');
  const [newTaskText, setNewTaskText] = useState('');

  const handleCreateNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');

    console.log('Task created successfully! :D');
  };

  const handleNewTaskChange = (e) => {
    e.target.setCustomValidity('');
    setNewTaskText(e.target.value);
  };

  const handleNewTaskInvalid = (e) => {
    console.log(e.target.setCustomValidity('Este campo é obrigatório.'));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleCreateNewTask}>
        <textarea
          type="text"
          className={styles.textarea}
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <Button handleCreateNewTask={handleCreateNewTask} />
      </form>

      <header className={styles.header}>
        <h4>
          Tarefas criadas
          <span>{tasks.length || 0}</span>
        </h4>
        <h4>
          Tarefas concluídas
          <span>0</span>
        </h4>
      </header>

      {/* {tasks.map((task) => {
          return (

          )
        })} */}
    </div>
  );
}

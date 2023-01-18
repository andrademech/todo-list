import { useState } from 'react';
import { Clipboard } from 'phosphor-react';

//Styles
import styles from './Tasks.module.css';

//Components
import { Button } from './Button';
import { Task } from './Task';

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleCreateNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task: newTaskText, completed: false }]);
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

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCreateNewTask(e);
    }
  };

  const handleTaskCompleted = (index) => {
    setCompletedTasks(completedTasks + 1);
    setTasks(tasks.filter((task, i) => i !== index));
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
          onKeyDown={(e) => handleKeyDown(e)}
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
          <span>{completedTasks} de {tasks.length}</span>
        </h4>
      </header>

      {tasks.length ? (
        tasks.map((task, index) => {
          return (
            <Task
              key={index}
              task={task}
              handleDeleteTask={handleDeleteTask}
              index={index}
            />
          );
        })
      ) : (
        <div className={styles.noTasks}>
          <Clipboard size={56} />
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}

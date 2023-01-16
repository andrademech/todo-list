import styles from './Task.module.css';

export function Task() {
  return (
    <>
      <div className={styles.Tasks}>
        <div className={styles.Check} />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          illo officia.
        </p>
        <button title="Delete task" className={styles.Trash}>
          <Trash size={20} color={'#808080'} />
        </button>
      </div>
      <div className={styles.noTasks}>
        <Clipboard size={56} />
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </>
  );
}

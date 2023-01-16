import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

export function Button({ handleCreateNewComment }) {
  return (
    <button className={styles.button} onClick={handleCreateNewComment}>
      Criar
      <PlusCircle size={20} />
    </button>
  );
}

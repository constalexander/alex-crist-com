import styles from './contexts.module.scss';

/* eslint-disable-next-line */
export interface ContextsProps {}

export function Contexts(props: ContextsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contexts!</h1>
    </div>
  );
}

export default Contexts;

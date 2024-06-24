import styles from './models.module.scss';

/* eslint-disable-next-line */
export interface ModelsProps {}

export function Models(props: ModelsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Models!</h1>
    </div>
  );
}

export default Models;

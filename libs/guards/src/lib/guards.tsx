import styles from './guards.module.scss';

/* eslint-disable-next-line */
export interface GuardsProps {}

export function Guards(props: GuardsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Guards!</h1>
    </div>
  );
}

export default Guards;

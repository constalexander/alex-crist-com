import { Button } from '@alex/ui/atoms/Button';
import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface SandboxProps {}

export default function Sandbox(props: SandboxProps) {
  return (
    <div className={styles['container']}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>sandbox</h1>
            <Button variant="outline" className="mt-5">
              dig
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

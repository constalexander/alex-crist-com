import { Button } from '@alex/ui/atoms/button';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1 className="text-[10vw] text-slate-400 ml-[10px] mt-[-20px]">
        Alex Crist
      </h1>
      <Button variant="outline" className="mt-5">
        Send it
      </Button>
    </div>
  );
}

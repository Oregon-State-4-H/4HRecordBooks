"use client";

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';

export default function Projects() {
  return (
    <main>
      <ActionBar title="Projects" disableBack={true} />
      <button type="button" className={classes.btn} id={classes.currentBtn}>Current</button>
      <button type="button" className={classes.btn} id={classes.previousBtn}>Previous</button>
    </main>
  );
}

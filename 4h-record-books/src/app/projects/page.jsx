"use client";

import classes from './styles.module.css';

export default function Projects() {
  return (
    <main>
      <h1><b>My Projects</b></h1>
      <button type="button" className={classes.btn} id={classes.currentBtn}>Current</button>
      <button type="button" className={classes.btn} id={classes.previousBtn}>Previous</button>
    </main>
  );
}

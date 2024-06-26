"use client";

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import demoData from '@/app/demoData.json';

export default function Projects() {
  var cardsJson = demoData.projects;

  var cards = cardsJson.map((card, index) => {
    return (
      <Link href={{pathname: "projects/overview"}} key={index} className={classes.card}>
        <div className={classes.cardTitle}>{card.name}</div>
        <div className={classes.cardDescription}>{card.description}</div>
      </Link>
    )
  })

  return (
    <main>
      <ActionBar title="Projects" disableBack={true} />
      
      <div className={classes.header}>
        <div className={classes.title}>Current Projects</div>
        <Link href={{pathname: "projects/previous"}} className={classes.btn} id='previousBtn'>View Previous Projects</Link>
      </div>

      <div className={classes.cardContainer}>
        {cards}
      </div>
    </main>
  );
}

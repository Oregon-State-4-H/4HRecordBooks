"use client";

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import demoData from '@/app/demoData.json';
import BackNavBtn from '@/app/components/BackNavBtn';


export default function Projects() {
  var cardsJson = demoData.projects;

  var cards = cardsJson.map((card, index) => {
    return (
      <div key={index} className={classes.card}>
        <div className={classes.cardTitle}>{card.name}</div>
        <div className={classes.cardDescription}>{card.description}</div>
      </div>
    )
  })

  return (
    <main>
      <ActionBar title="Previous Projects" disableBack={false} />
      
      <div className={classes.header}>
        <BackNavBtn /> 
        <div className={classes.title}>Previous Projects</div>
      </div>

      <div className={classes.cardContainer}>
        {cards}
      </div>
    </main>
  );
}

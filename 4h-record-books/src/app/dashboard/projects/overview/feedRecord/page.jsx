"use client";

import classes from './styles.module.css';
import { useState, useEffect } from 'react';
import demoData from '@/app/demoData.json';
import { IoMdAdd } from "react-icons/io";

function TableCard({ id }) {
  const animals = demoData.animals;
  const [animalData, setAnimalData] = useState(undefined);

  useEffect(() => {
    if (id) {
      let animalData = animals.find((animal) => animal._id === id);
      if (animalData) {
        setAnimalData(animalData);
      }
    }
  }, []);

  return (
    <>
      <div className={classes.sectionHeader}>
        <span className={classes.sectionTitle}>{animalData?.type} {animalData?.name}</span>
        <button className={classes.addInfoContainer}>
          <IoMdAdd />
          <span id="addInfo">Add Feeding Data</span>
        </button>
      </div>
    </>
  )
}

export default function FeedRecord({ searchParams: {id} }) {
  return (
    <>
      <TableCard id={id} />
    </>
  )
}
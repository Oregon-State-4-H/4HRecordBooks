"use client";

import classes from './styles.module.css';
import { useState, useEffect } from 'react';
import demoData from '@/app/demoData.json';
import { IoMdAdd } from "react-icons/io";
import ActionBar from '@/app/components/ActionBar';

function TableCard({ id }) {
  const feed = demoData.feed;
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    if (id) {
      const feedData = feed.filter((feed) => feed.animalID === id);
      if (feedData) {
        setFeedData(feedData);
      }
    }
  }, [id, feedData]);

  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Feed Type</th>
            <th>Amount Fed</th>
          </tr>
        </thead>

        <tbody>
          {feedData?.map((feedType, index) => (
            <tr key={index}>
              <td>{feedType.type}</td>
              <td>{feedType.amount} {feedType.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function FormCard({ title, onClose, options }) {
  const [data, setData] = useState(options[0]._id);

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  }

  return (
    <div className={classes.overlay}>
      <div className={classes.formCard}>
        <div className={classes.formHeader}>
          <span className={classes.formTitle}>{title}</span>
          <button className={classes.closeBtn} onClick={onClose}>X</button>
        </div>

        <label className={classes.label}>
          Feed Type
          <select className={classes.dropdownBtn} onChange={onOptionChangeHandler}>
            {options.map((options, index) => {
              return (
                <option key={index} value={options._id}>
                  {options.type} ({options.name})
                </option>
              )
            })}
          </select>
        </label>

        <label className={classes.label}>
            Amount Fed
            <input className={classes.textInputBox} type="number" onChange={event => {setValue(event.target.value)}} />
        </label>

        <label className={classes.label}>
            Unit
            <input className={classes.textInputBox} type="text" onChange={event => {setValue(event.target.value)}} />
        </label>
        
        <button className={classes.submitBtn}>Submit</button>

      </div>
    </div>
  )
}

export default function FeedRecord({ searchParams: {id} }) {
  const animals = demoData.animals;
  const [animalData, setAnimalData] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

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
      <div className={classes.animalName}>{animalData?.type} - {animalData?.name}</div>
      
      <div className={classes.sectionHeader}>
        <span className={classes.sectionTitle}>Daily Feed Log</span>
        <button className={classes.addInfoContainer} onClick={() => setShowModal(true)}>
          <IoMdAdd />
          <span id="addInfo">Add Feeding Data</span>
        </button>
      </div>

      {showModal && (
        <FormCard title="Add Feed Record" onClose={() => setShowModal(false)} options={animals} />
      )}

      <TableCard id={id} />
    </>
  )
}
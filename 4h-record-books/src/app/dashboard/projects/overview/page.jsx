"use client"

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';
import demoData from '@/app/demoData.json';
import BackNavBtn from '@/app/components/BackNavBtn';
import { redirect } from "next/navigation";

function Card(props) {
    var title = props.title;
    
    return (
        <div className={classes.cardTitle}>{title}</div>
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

        <select className={classes.dropdownBtn} onChange={onOptionChangeHandler}>
          {options.map((options, index) => {
            return (
              <option key={index} value={options._id}>
                {options.type} ({options.name})
              </option>
            )
          })}
        </select>

        <Link href={{pathname: "overview/feedRecord", query: {id: data}}} className={classes.submitBtn}>Submit</Link>
      </div>
    </div>
  )
}

export default function Overview() {
    const [showModal, setShowModal] = useState(false);
    const animalData = demoData.animals;

    return (
        <main>
            <ActionBar title="Project Overview" disableBack={false} />

            <div className={classes.title}>Project Overview</div>
            
            <div className={classes.cardContainer}>
                <div className={classes.cardGroup}>
                    <Card title = "Animal Inventory and Purchases" />
                    
                    <Link href={{pathname: "overview/supplyInventory"}}>
                        <Card title = "Equipment, Supplies, and Feed Inventory" />
                    </Link>

                    <Card title = "Other Expenses" />

                    <div onClick={() => setShowModal(true)}>
                      <Card title = "Feed Record" />
                    </div>
                    {showModal && (
                      <FormCard title="Select an Animal" onClose={() => setShowModal(false)} options={animalData} />
                    )}
                </div>
            </div>
        </main>
    )
}
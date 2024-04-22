"use client"

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';
import demoData from '@/app/demoData.json';
import BackNavBtn from '@/app/components/BackNavBtn';

function Card(props) {
    var title = props.title;
    
    return (
        <div className={classes.cardTitle}>{title}</div>
    )
}

function FormCard({ title, onClose, children }) {
  return (
    <div className={classes.overlay}>
      <div className={classes.formCard}>
        <h1>{title}</h1>
        <button className={classes.closeBtn} onClick={onClose}>X</button>
        <div className={classes.children}>
          {children}
        </div>
        <button type="submit" className={classes.submitBtn}>Submit</button>
      </div>
    </div>
  )
}

function DropdownCard(props) {
    const [data, setData] = useState(undefined);
    var options = props.options;
  
    const onOptionChangeHandler = (event) => {
      setData(event.target.value);
    }
  
    return (
      <select className={classes.dropdownBtn} onChange={onOptionChangeHandler}>
        <option>Select Animal</option>
        {options.map((option, index) => {
          return (
            <option key={index}>
              {option.type} ({option.name})
            </option>
          )
        })}
      </select>
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

                    {/* <Link href={{pathname: "overview/feedRecord"}}> */}
                    <div onClick={() => setShowModal(true)}>
                      <Card title = "Feed Record" />
                    </div>
                    {showModal && (
                      <FormCard title="Select an Animal" onClose={() => setShowModal(false)}>
                          <DropdownCard options={animalData} />
                      </FormCard>
                    )}
                    {/* </Link> */}
                </div>
            </div>
        </main>
    )
}
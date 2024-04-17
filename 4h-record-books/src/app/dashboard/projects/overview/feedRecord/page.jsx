"use client";

import classes from './styles.module.css';
import { useState } from 'react';
import demoData from "../../../../demoData.json"

function DropdownCard(props) {
    const [data, setData] = useState(undefined);
    var options = props.options;
  
    const onOptionChangeHandler = (event) => {
      setData(event.target.value);
    }
  
    return (
      <select className={styles.dropdownBtn} onChange={onOptionChangeHandler}>
        <option>Select Animal</option>
        {options.map((option, index) => {
          return (
            <option key={index}>
              {option}
            </option>
          )
        })}
      </select>
    )
  }

export default function FeedRecord() {
    const [data, setData] = useState([]);
    return (
        <>
            <h1>Hello World</h1>
        </>
    )
}
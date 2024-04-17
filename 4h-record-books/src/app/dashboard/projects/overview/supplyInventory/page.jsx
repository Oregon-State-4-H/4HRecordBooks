"use client";

import classes from './styles.module.css';
import { IoMdAdd } from "react-icons/io";

export default function SupplyInventory() {
    return (
        <>
            <div className={classes.sectionHeader}>
                <span className={classes.sectionTitle}>Feed Information</span>
                <button className={classes.addInfoContainer}>
                    <IoMdAdd />
                    <span id={classes.addInfo}>Add Info</span>
                </button>
            </div>
        </>
    )
}
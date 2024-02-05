"use client";
import classes from './styles.module.css';
import { useState } from 'react';

export default function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [county, setCounty] = useState("");

    const [items, setItems] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        if (name !== "" || setName !== "") {
        }
    }

    return (
        <main>
            <h1><b>Edit Profile</b></h1>
            <form>
                <label className={classes.label}>
                    Name
                    <input className={classes.textInputBox} type="text" value={name} onChange={event => {setName(event.target.value)}} placeholder="Demo User" />
                </label>
                <label className={classes.label}>
                    Email
                    <input className={classes.textInputBox} type="email" value={email} onChange={event => {setEmail(event.target.value)}} placeholder="demouser@gmail.com" />
                </label>
                <label className={classes.label}>
                    County
                    <input className={classes.textInputBox} type="text" value={county} onChange={event => {setCounty(event.target.value)}} placeholder="Benton" />
                </label>
            </form>
        </main>
    )
}
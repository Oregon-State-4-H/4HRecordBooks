"use client";
import classes from './styles.module.css';
import { useState } from 'react';

function updateProfile() {
    const [info, setInfo] = useState({
        name: "",
        gender: "",
        age: "",
        dob: "",
        club: "",
        leader: "",
        county: "",
        yearIn4H: "",
        project: "",
        yearInProject: "",
        projectStartDate: "",
        projectClosedDate: ""
    });

}

function Card(props) {
    var text = props.text;
    var input = props.input;
    const [value, setValue] = useState(input);

    return (
        <label className={classes.label}>
            {text}
            <input className={classes.textInputBox} type="text" value={value} onChange={event => {setValue(event.target.value)}} placeholder={input} />
        </label>
    )
}

function NumberCard(props) {
    var text = props.text;
    var numInput = props.numInput;
    const [num, setNum] = useState(numInput);

    return (
        <label className={classes.label}>
            {text}
            <input className={classes.textInputBox} type="number" value={num} onChange={event => {setNum(event.target.value)}} placeholder={numInput} />
        </label>
    )
}

export default function Profile() {
    const [email, setEmail] = useState("demouser@gmail.com");

    return (
        <main>
            <h1><b>Edit Profile</b></h1>
            <form className={classes.profileForm}>
                <Card text="Name" input="Demo User" />
                <Card text="Gender" input="Female" />

                <NumberCard text="Age" numInput="10" />
                <NumberCard text="Year Born" numInput="2014" />

                <label className={classes.label}>
                    Email
                    <input className={classes.textInputBox} type="email" value={email} onChange={event => {setEmail(event.target.value)}} placeholder="demouser@gmail.com" />
                </label>

                <Card text="Club Name" input="Dummy Data" />
                <Card text="Leader" input="John Doe" />
                <Card text="County" input="Benton" />
                
                <NumberCard text="Year In 4-H" numInput="2016" />

                <Card text="Kind of Project" input="Animal" />

                <NumberCard text="Year In This Project" numInput="2016" />
                <NumberCard text="Date Project Started" numInput="2018" />
                <NumberCard text="Date Project Closed" numInput="2020" />

            </form>
        </main>
    )
}
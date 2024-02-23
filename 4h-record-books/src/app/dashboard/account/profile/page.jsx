"use client";
import classes from './styles.module.css';
import { useState } from 'react';
import ActionBar from '@/app/components/ActionBar';
import Link from 'next/link';

// function updateProfile() {
//     const [info, setInfo] = useState({
//         name: "",
//         gender: "",
//         age: "",
//         dob: "",
//         club: "",
//         leader: "",
//         county: "",
//         yearIn4H: "",
//         project: "",
//         yearInProject: "",
//         projectStartDate: "",
//         projectClosedDate: ""
//     });

// }

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
            <ActionBar title="Edit Profile" />
            {/* <h1><b>Edit Profile</b></h1> */}
            <form className={classes.profileForm}>
                <Card text="First Name" input="John" />
                <Card text="Middle Name Initial" input="J" />
                <Card text="Last Name Initial" input="D" />

                {/* <NumberCard text="Age" numInput="10" /> */}
                <NumberCard text="Date of Birth" numInput="2014" />

                {/* <label className={classes.label}>
                    Email
                    <input className={classes.textInputBox} type="email" value={email} onChange={event => {setEmail(event.target.value)}} placeholder="demouser@gmail.com" />
                </label> */}
                
                <Card text="County" input="Benton" />
                
                {/* <NumberCard text="Year In 4-H" numInput="2016" /> */}

                <div className={classes.btns}>
                    <button type="submit" className={classes.submitBtn}>Update Profile</button>
                    <Link href={{pathname: "/dashboard/account/"}}>
                        <button type="submit" className={classes.submitBtn}>Cancel</button>
                    </Link>
                </div>

            </form>
        </main>
    )
}
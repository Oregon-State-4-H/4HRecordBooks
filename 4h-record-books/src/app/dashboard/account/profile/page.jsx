"use client";
import classes from './styles.module.css';
import { useState } from 'react';
import ActionBar from '@/app/components/ActionBar';
import Link from 'next/link';

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
            <input className={classes.textInputBox} type="date" value={num} onChange={event => {setNum(event.target.value)}} placeholder={numInput} />
        </label>
    )
}

export default function Profile() {
    return (
        <main>
            <ActionBar title="Edit Profile" />
            <form className={classes.profileForm}>
                <Card text="First Name" input="John" />
                <Card text="Middle Name Initial" input="J" />
                <Card text="Last Name Initial" input="D" />

                <NumberCard text="Date of Birth" numInput="2014-02-22" />
                
                <Card text="County" input="Benton" />
                
                <NumberCard text="When I Joined 4-H" numInput="2016-06-15" />

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
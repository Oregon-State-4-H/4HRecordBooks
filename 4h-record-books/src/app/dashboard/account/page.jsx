"use client"

import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';
import { getUserProfile } from '@/app/_db/srvactions/UserProfile';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from "next/navigation";
import { useState, useEffect } from 'react';


function Card(props) {
  var title = props.title;
  var url = props.url;

  return (
    <Link href={url} className={classes.accountCardItems}>
      <button type="button" className={classes.btn}>{title}</button>
    </Link>
  )
}

export default function Account() {
  const { user, error, isLoading } = useUser();

  const [userDoc, setUserDoc] = useState(null);


  useEffect(() => {
    try {
      getUserProfile(user.sub.substring(6))
        .then((data) => {
          setUserDoc(data);
        });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  if (!user) {
    redirect("../api/auth/login");
  }

  return (
    <main>
      <ActionBar title="Account" disableBack={true} />

      <h1><b>{userDoc?.first_name} {userDoc?.last_name_initial}</b></h1>
      <p>{userDoc?.email}</p>

      <br></br>

      <div className={classes.summaryCard}>
        <div className={classes.cardTitle}>Account</div>
        <div className={classes.accountCard}>
          <Card title="Edit Profile" url="/dashboard/account/profile" />
        </div>
      </div>
        
        <br></br>

      <div className={classes.summaryCard}>
        <div className={classes.cardTitle}>General</div>
        <div className={classes.accountCard}>
          <div>Support</div>
          <div>Terms of Services</div>
          <div>Invite Friends</div>
          {/* <Card title="Support"/>
          <Card title="Terms of Service"/>
          <Card title="Invite Friends"/> */}
        </div>
      </div>

        <br></br>

      <div className={classes.summaryCard}>
        <div className={classes.cardTitle}>Login</div>
        <div className={classes.accountCard}>
          <Card title="Logout" url="../api/auth/logout" />
        </div>
      </div>
    </main>
  );
}
import ActionBar from '@/app/components/ActionBar';
import classes from './styles.module.css';
import Link from 'next/link';


import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import connectDB from "../../lib/mongodb.js";
import { ObjectId } from "mongodb";

function Card(props) {
  var title = props.title;
  var url = props.url;

  return (
    <Link href={url} className={classes.accountCardItems}>
      <button type="button" className={classes.btn}>{title}</button>
    </Link>
  )
}

export default async function Account() {

  const session = await getSession();

  if (!session?.user) {
    redirect("../api/auth/login");
  }

  
  const userID = ObjectId.createFromHexString(session.user.sub.substring(6));
  const db = await connectDB();
  const user = await db.collection('users').findOne(userID);
  console.log("user:", user)


  

  return (
    <main>
      <ActionBar title="Account" disableBack={true} />
      <h1><b>{user.given_name} {user.family_name}</b></h1>
      <p>{user.email}</p>

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
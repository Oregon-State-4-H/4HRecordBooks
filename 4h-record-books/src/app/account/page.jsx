import classes from './styles.module.css';
import Link from 'next/link';

function Card(props) {
  var title = props.title;
  var url = props.url;

  return (
    <Link href={url} className={classes.accountCardItems}>
      <button type="submit" id={classes.btn}>{title}</button>
    </Link>
  )
}

export default function Account() {
  return (
    <main>
      <h1><b>Demo User</b></h1>
      <p>demouser@gmail.com</p>

      <br></br>

      <h2><b>Account</b></h2>
      <div className={classes.accountCard}>
        <Card title="Notification Settings" url="/account/setting" />
        <Card title="Edit Profile" url="/account/profile" />
      </div>

      <br></br>
      
      <h2><b>General</b></h2>
      {/* <div className={classes.accountCard}>
        <Card title="Support"/>
        <Card title="Terms of Service"/>
        <Card title="Invite Friends"/>
      </div> */}
    </main>
  );
}

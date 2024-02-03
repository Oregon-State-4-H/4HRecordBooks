import classes from './styles.module.css';

function Card(props) {
  var title = props.title;

  return (
    <div className={classes.accountCardItems}>
      <button type="submit" id={classes.btn}>{title}</button>
    </div>
  )
}

export default function Account() {
  return (
    <main>
      <h1><b>My Account</b></h1>
      <div className={classes.accountCard}>
        <Card title="Notification Settings"/>
        <Card title="Edit Profile"/>
      </div>

      <br></br>
      
      <h1><b>General</b></h1>
      <div className={classes.accountCard}>
        <Card title="Support"/>
        <Card title="Terms of Service"/>
        <Card title="Invite Friends"/>
      </div>
    </main>
  );
}

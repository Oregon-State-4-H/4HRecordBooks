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
      <h1><b>Demo User</b></h1>
      <p>demouser@gmail.com</p>

      <br></br>

      <h2><b>Account</b></h2>
      <div className={classes.accountCard}>
        <Card title="Notification Settings"/>
        <Card title="Edit Profile"/>
      </div>

      <br></br>
      
      <h2><b>General</b></h2>
      <div className={classes.accountCard}>
        <Card title="Support"/>
        <Card title="Terms of Service"/>
        <Card title="Invite Friends"/>
      </div>
    </main>
  );
}

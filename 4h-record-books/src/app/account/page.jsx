import classes from './styles.module.css';

export default function Account() {
  return (
    <main>
      <h1><b>My Account</b></h1>
      <div className="card-grid">

        <div className= { classes.acc_card }>
          <div className={ classes.acc_card_header }>
            <div className={ classes.acc_card_title }>Settings</div>
          </div>
        </div>

      </div>
    </main>
  );
}

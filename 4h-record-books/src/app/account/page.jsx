import classes from './styles.module.css';

function Card(props) {
  return (
      <div className="card">
          {props.children}
      </div>
  )
}

export default function Account() {
  return (
    <main>
      <h1><b>My Account</b></h1>
      <div className="card-grid">

        <div>
          {/* <div className={ classes.acc_card_header }>Settings</div> */}
          <button type="submit" id="btn">Settings</button>
        </div>

      </div>
    </main>
  );
}

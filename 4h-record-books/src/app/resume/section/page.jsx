import ActionBar from '../../components/ActionBar';
import styles from './styles.module.css';

function FormCard(props) {
  var children = props.children;

  return (
    <div className={styles.formCard}>
      {children}
      <button type="submit" className={styles.submitBtn}>Submit</button>
    </div>
  )
}

function Buttons(props) {
  var section = props.section;
  
  return (
    <div className={classes.sectionBtn}>
      <button type="button" className={classes.btnTitle}>{section}</button>
    </div>
  )
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

function section1() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section2() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section3() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section4() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section5() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section6() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section7() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section8() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section9() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
} 

function section10() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section11() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section12() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section13() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}

function section14() {
  return (
    <FormCard>
      <label className={styles.label}>
        Year
        <input className={styles.textInputBox} type="text" placeholder="Year" />
      </label>
    </FormCard>
  )
}







export default function Section({
  searchParams: {section},
}) {
  let sectionComponent;
  switch (section) {
    case '1':
      sectionComponent = section1();
      break;
    case '2':
      sectionComponent = section2();
      break;
    case '3':
      sectionComponent = section3();
      break;
    case '4':
      sectionComponent = section4();
      break;
    case '5':
      sectionComponent = section5();
      break;
    case '6':
      sectionComponent = section6();
      break;
    case '7':
      sectionComponent = section7();
      break;
    case '8':
      sectionComponent = section8();
      break;
    case '9':
      sectionComponent = section9();
      break;
    case '10':
      sectionComponent = section10();
      break;
    case '11':
      sectionComponent = section11();
      break;
    case '12':
      sectionComponent = section12();
      break;
    case '13':
      sectionComponent = section13();
      break;
    case '14':
      sectionComponent = section14();
      break;
    default:
      sectionComponent = null;
  }

  return (
    <main>
      <div>
        <ActionBar title={"Section " + section} />
        {sectionComponent}
      </div>
    </main>
  )
}

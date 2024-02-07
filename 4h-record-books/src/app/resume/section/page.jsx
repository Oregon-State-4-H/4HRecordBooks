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
    <div className={styles.sectionBtn}>
      <button type="button" className={styles.btnTitle}>{section}</button>
    </div>
  )
}

function StringCard(props) {
  var text = props.text;
  var name = props.name;

  return (
      <label className={styles.label}>
          {text}
          <input className={styles.textInputBox} type="text" placeholder={name} />
      </label>
  )
}

function NumberCard(props) {
  var text = props.text;
  var number = props.number;

  return (
      <label className={styles.label}>
          {text}
          <input className={styles.textInputBox} type="number" placeholder={number} />
      </label>
  )
}

function section1() {
  return (
    <FormCard>
      <NumberCard text="Year" number="2012-13" />
      <NumberCard text="Grade" number="9" />
      
      <StringCard text="Name of Club/Group" name="Oak Grove Clothing Club" />
      
      <NumberCard text="Number in Club/Group" number="9" />
      
      <StringCard text="Club/Group Leader or Advisor" name="Mrs. L. Jones" />
      
      <NumberCard text="Meetings Held" number="15" />
      <NumberCard text="Meetings Attended" number="12" />
    </FormCard>
  )
}

function section2() {
  return (
    <FormCard>
      <NumberCard text="Year" number="2012-13" />
      
      <StringCard text="Name of Project/Unit" name="Clothing" />
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

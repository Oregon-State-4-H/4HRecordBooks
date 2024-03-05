"use client";

import { useState } from 'react';
import ActionBar from '@/app/components/ActionBar';
import styles from './styles.module.css';
import { IoMdAdd } from "react-icons/io";

import demoData from "../../../demoData.json"

function TableCard({ title, data, headers, handleClick }) {
  return (
    <>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>{title}</span>
        <button className={styles.addInfoContainer} onClick={handleClick}>
          <IoMdAdd />
          <span id={styles.addInfo}>Add Info</span>
        </button>
      </div>

      <table className={styles.table}>
        <thead >
          <tr>
            {headers.map((header, headerID) => (
              <th key={headerID}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((rowData, rowID) => (
            <tr key={rowID}>
              {Object.keys(rowData).map((item, colID) => (
                <td key={colID}>
                  {Array.isArray(rowData[item]) ? (
                    <ul>
                      {rowData[item].map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  ) : rowData[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function FormCard({ onClose, children }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.formCard}>
        <button id={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.children}>
          {children}
        </div>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  )
}

function StringCard(props) {
  var text = props.text;

  return (
      <label className={styles.label}>
          {text}
          <input className={styles.textInputBox} type="text" />
      </label>
  )
}

function TextAreaCard(props) {
  var text = props.text;

  return (
      <label className={styles.label}>
          {text}
          <textarea className={styles.textInputBox} type="text" />
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

function DropdownCard(props) {
  const [data, setData] = useState(undefined);
  var options = props.options;

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  }

  return (
    <select className={styles.dropdownBtn} onChange={onOptionChangeHandler}>
      <option>Please choose one option</option>
      {options.map((option, index) => {
        return (
          <option key={index}>
            {option}
          </option>
        )
      })}
    </select>
  )
}

function addInfo3Columns(closeModal, col2, col3) {
  return (
    <FormCard onClose={closeModal}>
      <StringCard text="Year" />
      <TextAreaCard text={col2} />
      {col3 && <TextAreaCard text={col3} />}
    </FormCard>
  )
}

function addInfo5Cols(closeModal, col2, col3, col4, col5) {
  return (
    <FormCard onClose={closeModal}>
      <StringCard text="Year" />

      <TextAreaCard text={col2} />
      {col5 && <TextAreaCard text={col5} />}
      
      <NumberCard text={col3} />
      <NumberCard text={col4} />
    </FormCard>
  )
}

function addInfoDropDownSections(closeModal, activity, text, arr) {
  return (
    <FormCard onClose={closeModal}>
      <StringCard text="Year" />

      <StringCard text={activity} />
      <StringCard text={text} />

      <DropdownCard options={arr} />
    </FormCard>
  )
}

function section1() {
  const headers = ["Year", "Grade", "Name of Club/Group", "Number in Club/Group", "Club/Group Leader or Advisor", "Meetings Held", "Meetings Attended"]
  const data = demoData.section1
  const [showFormCard, setShowFormCard] = useState(false);
    
  return (
    <>
      <TableCard title="4-H Involvement" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && (
        <FormCard onClose={() => setShowFormCard(false)}>
          <StringCard text="Year" />
          <NumberCard text="Grade" />
          
          <StringCard text="Name of Club/Group" />
          
          <NumberCard text="Number in Club/Group" />
          
          <StringCard text="Club/Group Leader or Advisor" />
          
          <NumberCard text="Meetings Held" />
          <NumberCard text="Meetings Attended" />
        </FormCard>
      )}
    </>
  )
}

function section2() {
  const headers = ["Year", "Name of Project/Unit", "Project Size or Scope"]
  const data = demoData.section2
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="4-H Project/Program" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo3Columns(closeModal, "Name of Project/Unit", "Project Size or Scope")}
    </>
  )
}

function section3() {
  const section3Arr = ['Local/Club', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Kind of Activity", "Things I learned", "Region"]
  const data = demoData.section3
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Other Community Activities/Events" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfoDropDownSections(closeModal, "Kind of Activity", "Things I Learned", section3Arr)}
    </>
  )
}

function section4() {
  const section4Arr = ['Local', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Kind of Activity", "What I did and time spent", "Region"]
  const data = demoData.section4
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Other Community Activities/Events" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfoDropDownSections(closeModal, "Kind of Activity", "What I did and time spent", section4Arr)}
    </>
  )
}

function section5() {
  const headers = ["Year", "Leadership Title and Responsibilities", "Hours Spent", "Number of People Reached"]
  const data = demoData.section5
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Leadership in Other Organizations" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo5Cols(closeModal, "Leadership Title and Responsibilities", "Hours Spent", "Number of People Reached")}
    </>
  )
}

function section6() {
  const headers = ["Year", "Name of Organization", "Leadership Responsibilities", "Hours Spent", "Number of People Reached"]
  const data = demoData.section6
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Leadership in Other Organizations" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo5Cols(closeModal, "Name of Organization", "Leadership Responsibilities", "Hours Spent", "Number of People Reached")}
    </>
  )
}

function section7() {
  const headers = ["Year", "What I Did as a Club Member and/or Individual", "Hours Served", "Number of People Reached"]
  const data = demoData.section7
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Citizenship/Community Service in 4-H" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo5Cols(closeModal, "What I Did as a Club Member and/or Individual", "Hours Served", "Number of People Reached")}
    </>      
  )
}

function section8() {
  const headers = ["Year", "What I Did as an Individual or with Another Group", "Hours Served", "Number of People Reached"]
  const data = demoData.section8
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Other Citizenship/Community Service" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo5Cols(closeModal, "What I Did as an Individual or with Another Group", "Hours Served", "Number of People Reached")}
    </>
  )
}

function addInfo9And10(closeModal) {
  return (
    <FormCard onClose={closeModal}>
      <StringCard text="Year" />

      <StringCard text="Type of Communication" />
      <StringCard text="Topic" />

      <NumberCard text="Times Given" />

      <StringCard text="Location" />

      <NumberCard text="Size of Audience" />
    </FormCard>
  )
}

function section9() {
  const headers = ["Year", "Type of Communication", "Topic", "Times Given", "Location", "Size of Audience"]
  const data = demoData.section9
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Communications in 4-H" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo9And10(closeModal)}
    </>
  )
} 

function section10() {
  const headers = ["Year", "Type of Communication", "Topic", "Times Given", "Location", "Size of Audience"]
  const data = demoData.section10
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Communications in Other Organizations" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo9And10(closeModal)}
    </>
  )
}

function section11() {
  const headers = ["Year", "Event and Level", "Exhibits or Division Shown", "Ribbon(s) Received or Placings"]
  const data = demoData.section11
  const [showFormCard, setShowFormCard] = useState(false);

  return (
    <>
      <TableCard title="Participation in 4-H Contests/Competitions" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && (
        <FormCard onClose={() => setShowFormCard(false)}>
          <StringCard text="Year" />
          <StringCard text="Event and Level" />

          <TextAreaCard text="Exhibits or Division Shown" />

          <StringCard text="Ribbon(s) Received or Placings" />
        </FormCard>
      )}
    </>
  )
}

function section12() {
  const section12Arr = ['Local', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Contest/Events", "Recognition Received (if any)", "Region"]
  const data = demoData.section12
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Participation in Other Contests/Competitions" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfoDropDownSections(closeModal, "Contest/Events", "Recognition Received (if any)", section12Arr)}
    </>
  )
}

function section13() {
  const headers = ["Year", "Type of Recognition"]
  const data = demoData.section13
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="4-H Recognition" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo3Columns(closeModal, "Type of Recognition")}
    </>
  )
}

function section14() {
  const headers = ["Year", "Type of Recognition"]
  const data = demoData.section14
  const [showFormCard, setShowFormCard] = useState(false);

  const closeModal = () => {
    setShowFormCard(false)
  }

  return (
    <>
      <TableCard title="Other Recognition" data={data} headers={headers} handleClick={() => setShowFormCard(true)} />
      {showFormCard && addInfo3Columns(closeModal, "Type of Recognition")}
    </>
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
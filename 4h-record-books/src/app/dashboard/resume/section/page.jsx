"use client";

import { useState } from 'react';
import ActionBar from '@/app/components/ActionBar';
import styles from './styles.module.css';
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

import demoData from "../../../demoData.json"

function TableCard({ title, data, headers }) {
  return (
    <>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>{title}</span>
        <div className={styles.addInfoContainer}>
          <IoMdAdd />
          <span id={styles.addInfo}>Add Info</span>
        </div>
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

function FormCard(props) {
  var title = props.title;
  var children = props.children;

  return (
    <div className={styles.formCard}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTitle}>{title}</span>
        <div className={styles.editInfoContainer}>
          <CiEdit />
          <span id={styles.editInfo}>Edit Info</span>
        </div>
      </div>
      <div className={styles.children}>
        {children}
      </div>
      <button type="submit" className={styles.submitBtn}>Submit</button>
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

function TextAreaCard(props) {
  var text = props.text;
  var string = props.string;

  return (
      <label className={styles.label}>
          {text}
          <textarea className={styles.textInputBox} type="text" placeholder={string} />
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

function section1() {
  const headers = ["Year", "Grade", "Name of Club/Group", "Number in Club/Group", "Club/Group Leader or Advisor", "Meetings Held", "Meetings Attended"]
  const data = demoData.section1
    
  return (
    <TableCard title="4-H Involvement" data={data} headers={headers} />
    // <FormCard title="4-H Involvement">
    //   <StringCard text="Year" name="2012-13" />
    //   <NumberCard text="Grade" number="9" />
      
    //   <StringCard text="Name of Club/Group" name="Oak Grove Clothing Club" />
      
    //   <NumberCard text="Number in Club/Group" number="9" />
      
    //   <StringCard text="Club/Group Leader or Advisor" name="Mrs. L. Jones" />
      
    //   <NumberCard text="Meetings Held" number="15" />
    //   <NumberCard text="Meetings Attended" number="12" />
    // </FormCard>
  )
}

function section2() {
  const headers = ["Year", "Name of Project/Unit", "Project Size or Scope"]
  const data = demoData.section2

  return (
    <TableCard title="4-H Project/Program" data={data} headers={headers} />
    // <FormCard title="4-H Project/Program">
    //   <StringCard text="Year" name="2012-13" />
      
    //   <StringCard text="Name of Project/Unit" name="Clothing" />
    //   <TextAreaCard text="Project Size or Scope" string="1 apron, 2 dresses" />
    // </FormCard>
  )
}

function section3() {
  const section3Arr = ['Local/Club', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Kind of Activity", "Things I learned", "Region"]
  const data = demoData.section3

  return (
    <TableCard title="4-H Activities/Events" data={data} headers={headers} />
    // <FormCard title="4-H Activities/Events">
    //   <StringCard text="Year" name="2012-13" />

    //   <StringCard text="Kind of Activity" name="Record Keeping Clinic" />
    //   <StringCard text="Things I Learned" name="Stay up-to-date!" />

    //   <DropdownCard options={section3Arr} />
    // </FormCard>
  )
}

function section4() {
  const section4Arr = ['Local', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Kind of Activity", "What I did and time spent", "Region"]

  const data = demoData.section4

  return (
    <TableCard title="Other Community Activities/Events" data={data} headers={headers} />
    // <FormCard title="Other Community Activities/Events">
    //   <StringCard text="Year" name="2012-13" />

    //   <StringCard text="Kind of Activity" name="Soccer Team" />
    //   <TextAreaCard text="What I did and time spent" string="80 practices, 20 games, 300 hours" />
      
    //   <DropdownCard options={section4Arr} />
    // </FormCard>
  )
}

function section5() {
  const headers = ["Year", "Leadership Title and Responsibilities", "Hours Spent", "Number of People Reached"]
  const data = demoData.section5

  return (
    <TableCard title="Leadership in 4-H" data={data} headers={headers} />
    // <FormCard title="Leadership in 4-H">
    //   <StringCard text="Year" name="2012-13" />

    //   <TextAreaCard text="Leadership Title and Responsibilities" string="Refreshment committee - brought snacks to two meetings" />

    //   <NumberCard text="Hours Spent" number="1" />
    //   <NumberCard text="Number of People Reached" number="14" />
    // </FormCard>
  )
}

function section6() {
  const headers = ["Year", "Name of Organization", "Leadership Responsibilities", "Hours Spent", "Number of People Reached"]
  const data = demoData.section6

  return (
    <TableCard title="Leadership in Other Organizations" data={data} headers={headers} />
    // <FormCard title="Leadership in Other Organizations">
    //   <StringCard text="Year" name="2012-13" />

    //   <StringCard text="Name of Organization" name="Middle School" />
    //   <TextAreaCard text="Leadership Responsibilities" string="Student Aid in office; answered phone; greeted visitors" />
      
    //   <NumberCard text="Hours Spent" number="50" />
    //   <NumberCard text="Number of People Reached" number="1000" />
    // </FormCard>
  )
}

function section7() {
  const headers = ["Year", "What I Did as a Club Member and/or Individual", "Hours Served", "Number of People Reached"]
  const data = demoData.section7

  return (
    <TableCard title="Citizenship/Community Service in 4-H" data={data} headers={headers} />
    // <FormCard title="Citizenship/Community Service in 4-H">
    //   <StringCard text="Year" name="2012-13" />
      
    //   <TextAreaCard text="What I Did as a Club Member and/or Individual" string="Visited nursing home; introduced my 4-H dog to 4 elderly patients" />
      
    //   <NumberCard text="Hours Served" number="4" />
    //   <NumberCard text="Number of People Reached" number="15" />
    // </FormCard>
  )
}

function section8() {
  const headers = ["Year", "What I Did as an Individual or with Another Group", "Hours Served", "Number of People Reached"]
  const data = demoData.section8

  return (
    <TableCard title="Other Citizenship/Community Service" data={data} headers={headers} />
  //   <FormCard title="Other Citizenship/Community Service">
  //     <StringCard text="Year" name="2012-13" />

  //     <TextAreaCard text="What I Did as an Individual or with Another Group" string="Did yard work for elderly neighbors" />
      
  //     <NumberCard text="Hours Served" number="5" />
  //     <NumberCard text="Number of People Reached" number="2" />
  //   </FormCard>
  )
}

function section9() {
  const headers = ["Year", "Type of Communication", "Topic", "Times Given", "Location", "Size of Audience"]
  const data = demoData.section9

  return (
    <TableCard title="Communications in 4-H" data={data} headers={headers} />
    // <FormCard title="Communications in 4-H">
    //   <StringCard text="Year" name="2012-13" />

    //   <StringCard text="Type of Communication" name="Demonstration" />
    //   <StringCard text="Topic" name="How to Straighten Material" />

    //   <NumberCard text="Times Given" number="2" />

    //   <StringCard text="Location" name="Club & County" />
      
    //   <NumberCard text="Size of Audience" number="73" />
    // </FormCard>
  )
} 

function section10() {
  const headers = ["Year", "Type of Communication", "Topic", "Times Given", "Location", "Size of Audience"]
  const data = demoData.section10

  return (
    <TableCard title="Communications in Other Organizations" data={data} headers={headers} />
    // <FormCard title="Communications in Other Organizations">
    //   <StringCard text="Year" name="2012-13" />
    // </FormCard>
  )
}

function section11() {
  const headers = ["Year", "Event and Level", "Exhibits or Division Shown", "Ribbon(s) Received or Placings"]
  const data = demoData.section11

  return (
    <TableCard title="Participation in 4-H Contests/Competitions" data={data} headers={headers} />
    // <FormCard title="Participation in 4-H Contests/Competitions">
    //   <StringCard text="Year" name="2012-13" />
    // </FormCard>
  )
}

function section12() {
  const section12Arr = ['Local', 'County', 'Regional', 'State', 'National', 'International'];
  const headers = ["Year", "Contest/Events", "Recognition Received (if any)", "Region"]
  const data = demoData.section12

  return (
    <TableCard title="Participation in Other Contests/Competitions" data={data} headers={headers} />
    // <FormCard title="Participation in Other Contests/Competitions">
    //   <StringCard text="Year" name="2012-13" />
      
    //   <DropdownCard options={section12Arr} />
    // </FormCard>
  )
}

function section13() {
  const headers = ["Year", "Type of Recognition"]
  const data = demoData.section13

  return (
    <TableCard title="4-H Recognition" data={data} headers={headers} />
    // <FormCard title="4-H Recognition">
    //   <StringCard text="Year" name="2012-13" />

    //   <TextAreaCard text="Type of Recognition" string="Livestock Advancement Certificate - Step 1" />
    // </FormCard>
  )
}

function section14() {
  const headers = ["Year", "Type of Recognition"]
  const data = demoData.section14

  return (
    <TableCard title="Other Recognition" data={data} headers={headers} />
    // <FormCard title="Other Recognition">
    //   <StringCard text="Year" name="2012-13" />
      
    //   <TextAreaCard text="Type of Recognition" string="Spelling Champion for Grade 9" />
    // </FormCard>
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
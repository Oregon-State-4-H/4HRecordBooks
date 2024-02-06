"use client";
import Link from 'next/link';
import classes from './styles.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../components/reports/resume/Resume';
import { useEffect, useState } from 'react';

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

const Resume = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <main>
      <h1><b>Resume</b></h1>
      <Link href={'/resume/preview'} style={{textDecoration:"underline"}}>Preview Resume</Link>
      <br />

      { isClient ? 
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
          {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download Resume</button> )}
        </PDFDownloadLink>
      : null}

      <div className={classes.btnList}>
        <Buttons section="Section 1: 4-H Involvement" />
        <Buttons section="Section 2: 4-H Project/Program" />
        <Buttons section="Section 3: Participation in 4-H Activities/Events" />
        <Buttons section="Section 4: Participation in Other Community Activities/Events" />
        <Buttons section="Section 5: Leadership in 4-H" />
        <Buttons section="Section 6: Leadership in Other Organizations" />
        <Buttons section="Section 7: Citizenship/Community Service in 4-H" />
        <Buttons section="Section 8: Other Citizenship/Community Service Participation" />
        <Buttons section="Section 9: Communications in 4-H" />
        <Buttons section="Section 10: Communications in Other Organizations" />
        <Buttons section="Section 11: Participation in 4-H Contests/Competitions" />
        <Buttons section="Section 12: Participation in Other Contests/Competitions" />
        <Buttons section="Section 13: 4-H Recognition" />
        <Buttons section="Section 14: Other Recognition" />
      </div>
    </main>
  )
}

export default Resume;
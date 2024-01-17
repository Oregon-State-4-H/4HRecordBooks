"use client";
import Link from 'next/link';
import classes from './styles.module.css';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../components/reports/resume/Resume';
import { useEffect, useState } from 'react';

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
    </main>
  )
}

export default Resume;
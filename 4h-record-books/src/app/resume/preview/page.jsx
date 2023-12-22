"use client";
import classes from './styles.module.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


const ResumePDF = dynamic(() => import("../../components/reports/resume/Resume"), {
  ssr: false,
});


const Resume = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <main>
      <ResumePDF />
    </main>
  )
}


export default Resume;
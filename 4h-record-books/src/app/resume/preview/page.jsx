"use client";
import classes from './styles.module.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';


const ResumeViewer = dynamic(() => import("../../components/reports/resume/ResumeViewer"), {
  ssr: false,
});


const Resume = () => {
  const [client, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <main>
      <ResumeViewer />
    </main>
  )
}


export default Resume;
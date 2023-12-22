import Link from 'next/link';
import classes from './styles.module.css';
import { Document, Font } from "@react-pdf/renderer";


const Resume = () => {
  return (
    <main>
      <h1>Resume</h1>
      <Link href={'/resume/preview'} style={{textDecoration:"underline"}}>Preview Resume</Link>
    </main>
  )
}

export default Resume;
import Link from 'next/link';
import classes from './styles.module.css';


const Resume = () => {
  return (
    <main>
      <h1>Resume</h1>
      <Link href={'/resume/preview'} style={{textDecoration:"underline"}}>Preview Resume</Link>
    </main>
  )
}

export default Resume;
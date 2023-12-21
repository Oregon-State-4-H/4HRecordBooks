import Link from 'next/link'
import { MdContentPaste, MdOutlineDescription, MdOutlineHome } from "react-icons/md"

export default function Navbar(){
  return (
    <nav>
      <div className='navGroup'>
        <Link href="/" className='navItem'>
          <MdOutlineHome className='navIcon'/>
          Home
        </Link>

        <Link href="/resume" className='navItem'>
          <MdOutlineDescription className='navIcon'/>
          4-H Resume
        </Link>

        <Link href="/projects" className='navItem'>
          <MdContentPaste className='navIcon'/>
          My Projects
        </Link>
      </div>
    </nav>
  )
}
import Link from 'next/link'
import { MdContentPaste, MdOutlineDescription, MdOutlineHome, MdOutlineAccountCircle } from "react-icons/md"

export default function Navbar(){
  return (
    <nav>

      <div className='navTitle'>
        <Link href='/'>
          <h1>4-H Record Books</h1>
        </Link>
      </div>


      <div className='navGroup'>
        <Link href='/' className='navItem'>
          <MdOutlineHome className='navIcon'/>
          Home
        </Link>

        <Link href='/resume' className='navItem'>
          <MdOutlineDescription className='navIcon'/>
          4-H Resume
        </Link>

        <Link href='/projects' className='navItem'>
          <MdContentPaste className='navIcon'/>
          My Projects
        </Link>

        <Link href='/account' className='navItem'>
          <MdOutlineAccountCircle className='navIcon'/>
          Account
        </Link>
      </div>
    </nav>
  )
}
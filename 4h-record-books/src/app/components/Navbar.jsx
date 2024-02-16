import Link from 'next/link'
import { MdContentPaste, MdOutlineDescription, MdOutlineHome, MdOutlineAccountCircle } from "react-icons/md"

export default function Navbar(props){
  var isBasic = props.isBasic;

  if (isBasic) {
    return (
      <nav className='basicNavBar'>
        <Link href='/' className='navTitle'>
          <h1>4-H Record Books</h1>
        </Link>
  
        <div className='navGroup'>
          <Link href='/about' className='navItem'>About</Link>
          <Link href='/dashboard' className='navItem'>Go to Dashboard</Link>
          <Link href='/auth/sign-up' className='navItem'>Sign up/Sign in</Link>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className='dashNavBar'>
        <Link href='/dashboard/' className='navTitle'>
          <h1>4-H Record Books</h1>
        </Link>
  
        <div className='navGroup'>
          <Link href='/dashboard/' className='navItem'>
            <MdOutlineHome className='navIcon'/>
            Home
          </Link>
  
          <Link href='/dashboard/resume' className='navItem'>
            <MdOutlineDescription className='navIcon'/>
            4-H Resume
          </Link>
  
          <Link href='/dashboard/projects' className='navItem'>
            <MdContentPaste className='navIcon'/>
            My Projects
          </Link>
  
          <Link href='/dashboard/account' className='navItem'>
            <MdOutlineAccountCircle className='navIcon'/>
            Account
          </Link>
        </div>
      </nav>
    )
  }
}
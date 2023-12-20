import Link from 'next/link'

export default function Navbar(){
  return (
    <nav>
      <h1>4-H Record Books</h1>
      <Link href="/">Home</Link>
      <Link href="/resume">My 4-H Resume</Link>
      <Link href="/projects">My Projects</Link>
    </nav>
  )
}
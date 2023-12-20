// styles
import { Inter } from 'next/font/google'
import './globals.css'

// components
import Navebar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '4-H Record Books',
  description: 'A digital record book for 4-H members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navebar />
        {children}
      </body>
    </html>
  )
}

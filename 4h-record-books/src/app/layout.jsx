import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: '4-H Record Books',
  description: 'A digital record book for 4-H members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

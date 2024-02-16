import './globals.css'

export const metadata = {
  manifest:"/manifest.json",
  title: '4-H Record Books',
  description: 'A digital record book for 4-H members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

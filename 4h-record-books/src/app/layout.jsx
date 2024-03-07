import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  manifest:"/manifest.json",
  title: '4-H Record Books',
  description: 'A digital record book for 4-H members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}

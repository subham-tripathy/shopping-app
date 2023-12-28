import NavBar from './Components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Shopping App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className='fixed z-10 left-0 right-0 top-0'><NavBar/></nav>
        {children}
      </body>
    </html>
  )
}

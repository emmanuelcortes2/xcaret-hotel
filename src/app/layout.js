import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import PreFooter from '../../components/PreFooter'
import Legals from '../../components/Legals'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xcaret Hotel',
  description: 'Xcaret Hotel Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Legals />
        <PreFooter />
        <Footer />
      </body>
    </html>
  )
}

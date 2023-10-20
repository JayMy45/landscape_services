import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jones Landscaping Services',
  description: 'Website for Jones Landscaping Services',
}

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  )
}

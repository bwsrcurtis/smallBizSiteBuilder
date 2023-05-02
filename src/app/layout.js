import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Curtis Designs',
  description: 'Static Sites Made Easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header></Header>
      <body className={inter.className}>{children}</body>
      <Footer></Footer>
    </html>
  )
}

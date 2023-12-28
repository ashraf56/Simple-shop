import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './providers'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Simple Store',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={inter.className}>
        <Provider>
          <div>
            <main>  {children}</main>
          </div>
        </Provider>
      </body>
    </html>
  )
}

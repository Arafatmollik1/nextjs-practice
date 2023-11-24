import './globals.css'
import Chakra from '../components/Chakra'


export default function RootLayout({ children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Chakra>
          {children}
        </Chakra>
      </body>
    </html>
  )
}

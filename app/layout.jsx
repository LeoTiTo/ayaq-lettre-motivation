import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Footer } from '../components/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

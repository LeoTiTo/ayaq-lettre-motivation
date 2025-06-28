import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Footer } from '../components/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="https://ayaq.com/cdn/shop/files/favicon-white.png?crop=center&amp;height=32&amp;v=1613732780&amp;width=32" type="image/svg+xml" />
        <title>Candidature | Huu Loc TRAN</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import "./globals.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

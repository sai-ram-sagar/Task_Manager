// app/layout.js
import '../styles/globals.css'
import './styles.css'

export const metadata = {
  title: 'My App',
  description: 'Next.js + Plain CSS App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

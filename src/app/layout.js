import '../styles/globals.css'

export const metadata = {
  title: 'Daily Bloom',
  description: 'Generated by Group One',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}

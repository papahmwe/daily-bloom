
import '../styles/globals.css'
import { SessionProvider } from "../components/Habits_Management/SessionProvider"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
} 
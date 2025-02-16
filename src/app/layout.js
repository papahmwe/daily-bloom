import { Inter } from "next/font/google";
import '../styles/globals.css'
import { SessionProvider } from "../components/Habits_Management/SessionProvider"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
} 
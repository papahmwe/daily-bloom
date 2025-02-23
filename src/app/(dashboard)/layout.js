import Navbar from "@/components/Dashboard_Home/Navbar";
import Sidebar from "@/components/Dashboard_Home/Sidebar";
import "../../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Daily Bloom",
  description: "Generated by Group One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="flex w-[100vw] h-[100vh] overflow-hidden">
          <Sidebar />

          <div className="relative w-full h-[100vh] bg-[#F3F2F7]">
            <Navbar />
            <div className="w-full h-full overflow-y-auto pt-[130px] pb-[80px] pl-14">
              {children}
              <Toaster />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/nav";
import { Toaster } from "react-hot-toast";
import { TimelineProvider } from "@/context/TimelineContext";
 export default function RootLayout({ children }) {
  return (
<html lang="en" data-theme="light">
        <body>
<Toaster />
             <TimelineProvider> 
        <Navbar />
        {children}
        <Footer></Footer>
        </TimelineProvider>
      </body>
    </html>
  );
}
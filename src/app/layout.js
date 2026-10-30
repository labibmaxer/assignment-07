import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/nav";
import { Toaster } from "react-hot-toast";
import { TimelineProvider } from "@/context/TimelineContext";
 export default function RootLayout({ children }) {
  return (
<html lang="en" data-theme="light">
        <body className="flex min-h-screen flex-col">
<Toaster />
             <TimelineProvider> 
        <Navbar />
        <main className="flex-1">  
          {children}

        </main>
       
        <Footer></Footer>
        </TimelineProvider>
      </body>
    </html>
  );
}
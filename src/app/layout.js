import "./globals.css";
import Navbar from "@/components/nav";
export default function RootLayout({ children }) {
  return (
<html lang="en" data-theme="light">
        <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
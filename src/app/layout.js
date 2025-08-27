import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "./components/LayoutClientWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Heama Chemicals",
  description:
    "Sri Lankan chemical supplier, industrial chemicals Sri Lanka, bulk chemical distributor Colombo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutClientWrapper>
          <Navbar />
          {children}
          <Footer />
          {/* Use env var or pass a phone prop like phone="94771234567" */}
          <WhatsAppFloatingButton />
        </LayoutClientWrapper>
      </body>
    </html>
  );
}
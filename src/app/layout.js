import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "./components/LayoutClientWrapper"; // ✅ Only this is imported

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
  description: "High-quality chemicals for industrial, medical, and scientific applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}

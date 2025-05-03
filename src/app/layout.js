import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Using Poppins as a substitute for Satoshi
const satoshi = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Sereno | Enterprise AI Solutions",
  description: "We partner with India's largest organizations to design and deploy custom AI solutions that deliver results fast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/satoshi" 
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${satoshi.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

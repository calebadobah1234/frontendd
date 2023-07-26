import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voting App",
  description: "Voting App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main>
        <body className={inter.className}>{children}</body>
        <Footer />
      </main>
    </html>
  );
}

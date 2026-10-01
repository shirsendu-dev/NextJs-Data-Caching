import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
})


export const metadata = {
  title: "NextJs Data Caching",
  description: "NextJs App by SB",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`} cz-shortcut-listen="false">

        <UserProvider>

          <Navbar></Navbar>
          <main>
            {children}
          </main>
          <Footer></Footer>

        </UserProvider>


      </body>
    </html>
  );
}

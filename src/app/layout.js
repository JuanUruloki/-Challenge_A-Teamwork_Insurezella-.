import localFont from "next/font/local";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header/index.js";
import "./styles/index.css";



export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

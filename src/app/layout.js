import Header from "@/components/Header";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gle",
  description: "Gle by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}

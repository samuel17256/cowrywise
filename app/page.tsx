import Footer from "@/components/Footer";
import Main from "../components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Main />
      </main>
      <Footer />
    </div>
  );
}


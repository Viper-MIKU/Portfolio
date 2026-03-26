import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white scroll-smooth">

      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#10b981",
            border: "1px solid #10b981",
            zIndex: 999999
          }
        }}
      />

      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* 🔥 ADD THIS */}
      <Footer />

    </div>
  );
}

export default App;
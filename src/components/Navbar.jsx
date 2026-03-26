import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Linkedin,
  Github,
  Instagram,
  Download
} from "lucide-react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // THEME LOAD
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // SCROLL TRACKING
  useEffect(() => {

    const sections = document.querySelectorAll("section");
    let ticking = false;

    const handleScroll = () => {

      if (!ticking) {
        window.requestAnimationFrame(() => {

          let current = "";

          sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 120 && rect.bottom >= 120) {
              current = section.id;
            }
          });

          setActive(prev => (prev !== current ? current : prev));
          setScrolled(window.scrollY > 50);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const linkClass = (section) =>
    `relative transition duration-200 ${
      active === section
        ? "text-emerald-400"
        : "hover:text-emerald-400"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 shadow-lg"
        : "bg-transparent"
      }`}
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center py-4">

        {/* LOGO */}
        <div className="flex flex-col leading-none cursor-pointer">
          <span className="text-xl font-bold text-emerald-500 dark:text-emerald-400 tracking-widest">
            ヴィナヤク
          </span>
          <span className="text-[10px] tracking-[6px] text-gray-500 dark:text-gray-400">
            MIRAI
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className={linkClass(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-400 transition-all duration-200 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">

          {/* RESUME */}
          <a
            href="/resume.pdf"
            download="Vinayak_Resume.pdf"
            className="hidden sm:block hover:text-emerald-400 transition"
          >
            <Download />
          </a>

          {/* SOCIALS */}
          <a href="https://github.com/Viper-MIKU" target="_blank">
            <Github className="hover:text-emerald-400 transition" />
          </a>

          <a href="https://www.linkedin.com/in/vinayak-suryavanshi-9a29b2238" target="_blank">
            <Linkedin className="hover:text-emerald-400 transition hidden sm:block" />
          </a>

          <a href="https://www.instagram.com/vinayak_suryavanshi03" target="_blank">
            <Instagram className="hover:text-emerald-400 transition hidden sm:block" />
          </a>

          {/* THEME */}
          <button onClick={toggleTheme}>
            {darkMode ? <Sun /> : <Moon />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 
        bg-white dark:bg-zinc-900 shadow-md">

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-emerald-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}

export default Navbar;
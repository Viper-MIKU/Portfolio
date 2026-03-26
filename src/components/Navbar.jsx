import { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Github, Instagram, Download, Menu, X } from "lucide-react";

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

    const handleScroll = () => {
      let current = "";

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const linkClass = (section) =>
    `block py-2 text-lg ${
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
          <span className="text-lg sm:text-xl font-bold text-emerald-500 tracking-widest">
            ヴィナヤク
          </span>
          <span className="text-[10px] tracking-[5px] text-gray-500">
            MIRAI
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-emerald-400">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4 text-gray-700 dark:text-gray-300">

          {/* RESUME */}
          <a href="/resume.pdf" download>
            <Download size={18} className="hover:text-emerald-400 transition" />
          </a>

          {/* LINKEDIN */}
          <a href="https://www.linkedin.com/" target="_blank">
            <Linkedin size={18} className="hover:text-emerald-400 transition" />
          </a>

          {/* GITHUB */}
          <a href="https://github.com/" target="_blank">
            <Github size={18} className="hover:text-emerald-400 transition" />
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram size={18} className="hover:text-emerald-400 transition" />
          </a>

          {/* THEME */}
          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 px-6 pb-4">

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={linkClass(item)}
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
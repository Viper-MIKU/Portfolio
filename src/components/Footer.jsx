import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-zinc-800 
    bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md relative overflow-hidden">

      {/* subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-8 
        flex flex-col items-center gap-5 text-center"
      >

        {/* NAME */}
        <h2 className="text-sm sm:text-base font-medium text-emerald-500 dark:text-emerald-400 tracking-wide">
          Viper
        </h2>

        {/* SOCIALS */}
        <div className="flex gap-6 text-gray-500 dark:text-gray-400">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-emerald-400 hover:scale-110"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/vinayak-suryavanshi-9a29b2238/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:text-emerald-400 hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

        {/* DIVIDER */}
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Vinayak. All rights reserved.
        </p>

      </motion.div>
    </footer>
  );
}

export default Footer;
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-zinc-800 
    bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-6 
        flex flex-col items-center gap-4 text-center"
      >

        {/* NAME */}
        <h2 className="text-sm sm:text-base font-medium text-emerald-500 dark:text-emerald-400">
          Viper
        </h2>

        {/* SOCIALS */}
        <div className="flex gap-6 text-gray-500 dark:text-gray-400">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-500 transition"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Vinayak. All rights reserved.
        </p>

      </motion.div>
    </footer>
  );
}

export default Footer;
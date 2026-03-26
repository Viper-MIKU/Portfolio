import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {

  const lines = [
    {
      role: "Machine Learning Engineer",
      sub: "Building intelligent real-time systems"
    },
    {
      role: "Computer Vision Developer",
      sub: "Turning vision into interaction"
    },
    {
      role: "AI Enthusiast",
      sub: "Exploring deep learning & innovation"
    }
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [displaySub, setDisplaySub] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typingRole");

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout;

    if (phase === "typingRole") {
      if (charIndex < current.role.length) {
        timeout = setTimeout(() => {
          setDisplayRole(current.role.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 55);
      } else {
        timeout = setTimeout(() => setPhase("typingSub"), 250);
      }
    }

    else if (phase === "typingSub") {
      if (displaySub.length < current.sub.length) {
        timeout = setTimeout(() => {
          setDisplaySub(current.sub.slice(0, displaySub.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1400);
      }
    }

    else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    }

    else if (phase === "deleting") {
      if (displaySub.length > 0) {
        timeout = setTimeout(() => {
          setDisplaySub(prev => prev.slice(0, -1));
        }, 18);
      } else if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 22);
      } else {
        setPhase("typingRole");
        setLineIndex((prev) => (prev + 1) % lines.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);

  }, [charIndex, displayRole, displaySub, phase, lineIndex]);

  return (
    <section
      id="home"
      className="w-full min-h-[85vh] flex items-center justify-center relative overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-emerald-400/10 blur-3xl top-[-100px] left-[-80px]" />
        <div className="absolute w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-cyan-400/10 blur-3xl bottom-[-100px] right-[-80px]" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center px-4 sm:px-6 max-w-2xl mx-auto"
      >

        {/* NAME */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Hi, I'm Vinayak
        </h1>

        {/* ROLE */}
        <p className="mt-4 text-lg sm:text-xl font-semibold text-emerald-500 dark:text-emerald-400 min-h-[28px]">
          {displayRole}
          <span className="ml-1 animate-pulse">|</span>
        </p>

        {/* SUBTEXT */}
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base min-h-[20px]">
          {displaySub}
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="border border-emerald-500 dark:border-emerald-400 px-6 py-2 rounded-lg 
            hover:bg-emerald-500 dark:hover:bg-emerald-400 
            hover:text-black transition duration-200"
          >
            Explore My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="border border-emerald-500 dark:border-emerald-400 px-6 py-2 rounded-lg 
            hover:bg-emerald-500 dark:hover:bg-emerald-400 
            hover:text-black transition duration-200"
          >
            Get In Touch
          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;
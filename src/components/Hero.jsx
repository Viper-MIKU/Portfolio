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
      className="h-screen flex items-center justify-center relative pt-20"
    >

      {/* CLEAN BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-emerald-400/10 blur-3xl top-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 blur-3xl bottom-[-120px] right-[-120px]" />
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        className="text-center px-4"
      >

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Hi, I'm Vinayak
        </h1>

        {/* ROLE */}
        <p className="mt-4 text-xl font-semibold text-emerald-500 dark:text-emerald-400 h-6">
          {displayRole}
          <span className="ml-1 animate-pulse">|</span>
        </p>

        {/* SUBTEXT */}
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm h-5">
          {displaySub}
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 justify-center">

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
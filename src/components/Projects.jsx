import { motion } from "framer-motion";
import { Github } from "lucide-react";

function Projects() {

  const projects = [
    {
      title: "Sign Language Vision to Text",
      desc: "Real-time gesture recognition system using OpenCV and Deep Learning.",
      tech: ["Python", "OpenCV", "CNN"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Railway Reservation System",
      desc: "Web based ticket booking system built with PHP.",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Falling Ball Game",
      desc: "Interactive browser game made using JavaScript.",
      tech: ["JavaScript"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Website Blocker",
      desc: "Blocks distracting websites using Python.",
      tech: ["Python"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    },
    {
      title: "Gesture Volume Control",
      desc: "Control system volume using hand gestures.",
      tech: ["Python", "Machine Learning"],
      link: "https://github.com/YOUR_GITHUB_LINK"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24"
    >

      <div className="px-6 md:px-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400 mb-12"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="group border border-gray-200 dark:border-zinc-800 
              rounded-xl p-6 
              bg-white/60 dark:bg-zinc-900/30 
              transition duration-200 
              hover:border-emerald-400"
            >

              {/* TITLE */}
              <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition duration-200">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-gray-200/70 dark:bg-zinc-700/60 
                    transition duration-200
                    group-hover:text-emerald-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ICON */}
              <div className="mt-6 flex justify-end">
                <Github className="transition duration-200 group-hover:text-emerald-400 group-hover:scale-105" />
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
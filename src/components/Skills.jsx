import { motion } from "framer-motion";

function Skills() {

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Git", "MongoDB"]
    },
    {
      title: "AI / ML",
      skills: ["Python", "OpenCV", "Machine Learning", "TensorFlow"]
    }
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400"
        >
          Skills
        </motion.h2>

        <div className="w-16 sm:w-20 h-[2px] bg-emerald-500 dark:bg-emerald-400 mt-3 sm:mt-4 mb-8 sm:mb-10" />

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mb-10 md:mb-14"
        >
          I work across frontend development, backend tools, and AI systems,
          focusing on building interactive and intelligent applications.
        </motion.p>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

          {skillGroups.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="border border-gray-200 dark:border-zinc-800 
              rounded-xl p-5 sm:p-6 
              bg-white/60 dark:bg-zinc-900/30 
              transition duration-200 hover:border-emerald-400"
            >

              <h3 className="text-emerald-500 dark:text-emerald-400 mb-4 sm:mb-5 font-semibold tracking-wide text-sm sm:text-base">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                {group.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm rounded-full 
                    bg-gray-200/70 dark:bg-zinc-700/60 
                    transition duration-200 cursor-default
                    hover:text-emerald-400"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
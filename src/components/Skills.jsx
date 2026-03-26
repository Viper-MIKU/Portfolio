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
      className="min-h-screen w-full py-24"
    >

      <div className="px-6 md:px-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400"
        >
          Skills
        </motion.h2>

        <div className="w-20 h-[2px] bg-emerald-500 dark:bg-emerald-400 mt-4 mb-10" />

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mb-14"
        >
          I work across frontend development, backend tools, and AI systems,
          focusing on building interactive and intelligent applications.
        </motion.p>

        {/* SKILL GROUPS */}
        <div className="grid md:grid-cols-3 gap-10">

          {skillGroups.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 25 }}
              transition={{ delay: index * 0.45 }}
              className="border border-gray-200 dark:border-zinc-800 
              rounded-xl p-6 
              bg-white/60 dark:bg-zinc-900/30 
              transition duration-200 hover:border-emerald-400"
            >

              <h3 className="text-emerald-500 dark:text-emerald-400 mb-5 font-semibold tracking-wide">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full 
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
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-emerald-500 dark:text-emerald-400"
        >
          About Me
        </motion.h2>

        <div className="w-16 sm:w-20 h-[2px] bg-emerald-500 dark:bg-emerald-400 mt-3 sm:mt-4 mb-8 sm:mb-10" />

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed"
        >
          I focus on building intelligent real-time systems using Machine Learning 
          and Computer Vision that interact naturally with users. My goal is to create 
          practical AI solutions that bridge the gap between human interaction and technology.
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-16">

          {[
            {
              title: "EDUCATION",
              content: (
                <>
                  <p className="font-medium">
                    Diploma in Computer Science
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    MSBTE | Samarth Samaj Shivajirao S. Jondhale Polytechnic (2022)
                  </p>

                  <div className="mt-3" />

                  <p className="font-medium">
                    Bachelor of Computer Science (B.Tech)
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    University of Mumbai (2025)
                  </p>
                </>
              )
            },
            {
              title: "SPECIALIZATION",
              content: (
                <>
                  <p className="font-medium">
                    Machine Learning
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Computer Vision & Real-time AI Systems
                  </p>
                </>
              )
            },
            {
              title: "CORE STACK",
              content: (
                <p className="font-medium">
                  Python • OpenCV • React
                </p>
              )
            },
            {
              title: "FOCUS AREA",
              content: (
                <p className="font-medium">
                  Computer Vision Systems
                </p>
              )
            },
            {
              title: "INTERESTS",
              content: (
                <p className="font-medium">
                  Deep Learning • Real-time Interaction
                </p>
              )
            },
            {
              title: "GOAL",
              content: (
                <p className="font-medium">
                  Build AI systems for real-world usability
                </p>
              )
            }
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="border border-gray-200 dark:border-zinc-800 
              rounded-xl p-5 sm:p-6 
              bg-white/60 dark:bg-zinc-900/30 
              transition duration-200 hover:border-emerald-400"
            >

              {/* TITLE */}
              <h3 className="text-xs sm:text-sm mb-3 sm:mb-4 tracking-widest text-emerald-500 dark:text-emerald-400">
                {item.title}
              </h3>

              {/* CONTENT */}
              <div className="text-sm sm:text-base">
                {item.content}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;
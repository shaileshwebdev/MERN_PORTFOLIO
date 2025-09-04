import React from "react";
import { motion } from "framer-motion";
import { TechstackList } from "../utils/TechstackList";

const Techstack = () => {
  return (
    <section
      id="techstack"
      className="relative py-16 px-6 md:px-12 lg:px-24"
      aria-labelledby="techstack-heading"
    >
      {/* Heading Box with Glassmorphism */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/10 dark:bg-neutral-900/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl text-center max-w-4xl mx-auto mb-12"
      >
        <h2
          id="techstack-heading"
          className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 uppercase"
        >
          Technologies Stack
        </h2>
        <div
          className="w-40 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded-full"
          aria-hidden="true"
        />
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          👉 Including programming languages, frameworks, databases, front-end &
          back-end tools, and APIs
        </p>
      </motion.div>

      {/* Tech Cards Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {TechstackList.map((tech, index) => (
          <motion.div
            key={tech._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div
              role="button"
              tabIndex={0}
              className="flex flex-col items-center justify-center p-6 
                     bg-white/10 dark:bg-neutral-800/40 backdrop-blur-md 
                     border border-white/20 rounded-xl cursor-pointer 
                     hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 
                     hover:text-white transition-all duration-500 
                     focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.currentTarget.click();
                }
              }}
            >
              <tech.icon
                className="text-4xl mb-2 text-indigo-600 dark:text-indigo-400 group-hover:text-white"
                aria-hidden="true"
              />
              <h5 className="font-semibold">{tech.name}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;

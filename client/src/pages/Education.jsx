import React from "react";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

const Education = () => {
  const items = [
    {
      year: "2020 - 2024",
      title: "Bachelor of Technology in Information Technology",
      subtitle:
        "Buddha Institute of Technology, Gida, Gorakhpur, Uttar Pradesh",
    },
    {
      year: "2018 - 2020",
      title: "Intermediate",
      subtitle: "Vimal Inter College, Gorakhpur, Uttar Pradesh",
    },
    {
      year: "2016",
      title: "High School",
      subtitle: "P.G Senior Secondary School, Captainganj, Uttar Pradesh",
    },
  ];

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-4 md:px-8 py-16"
    >
      {/* Glass container */}
      <div
        className="
      max-w-5xl mx-auto rounded-2xl shadow-xl
      bg-white/10 dark:bg-neutral-900/30
      backdrop-blur-xl border border-white/20 dark:border-neutral-700
      p-6 md:p-10
    "
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 uppercase">
          Education Details
        </h2>
        <div className="w-32 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded-full" />

        <div className="flex flex-col gap-6 mt-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="
            flex items-center gap-4 p-5 rounded-xl
            bg-white/10 dark:bg-white/5
            backdrop-blur-lg border border-white/20
            shadow-md hover:shadow-lg hover:shadow-indigo-400/30 
            dark:hover:shadow-indigo-900/40
            transition
          "
            >
              <div className="text-indigo-500 dark:text-indigo-400 text-3xl">
                <MdSchool />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.subtitle}
                </p>
                <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

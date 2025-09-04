import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MdSchool } from "react-icons/md";
import { SiReact } from "react-icons/si";

const experienceList = [
  {
    type: "Education",
    title: "B.Tech",
    subtitle: "BIT Gorakhpur, Uttar Pradesh",
    date: "2020 - 2024",
    icon: MdSchool,
    description:
      "B.Tech (IT) Graduate | MERN Stack Developer | Focused on clean code & seamless user experience.",
  },
  {
    type: "Education",
    title: "Intermediate",
    subtitle: "Vimal Inter College, Gorakhpur, INDIA",
    date: "2018 - 2020",
    icon: MdSchool,
    description:
      "Completed Intermediate in Science (PCM) with 61%, building a strong foundation in Mathematics, Physics, and Chemistry.",
  },
  {
    type: "Internship",
    title: "Full Stack Developer[MERN]",
    subtitle: "Nielit, Gorakhpur",
    date: "2024 - 2025",
    icon: SiReact,
    description:
      "Full Stack Developer (MERN) | Trained at NIELIT Gorakhpur, a government institute, skilled in building modern, scalable, and user-friendly web applications.",
  },
  {
    type: "Education",
    title: "Full Stack Developer Course",
    subtitle: "GeeksForGeeks",
    date: "2023 - 2024",
    icon: MdSchool,
    description:
      "Completed Full Stack Development (MERN) course from GeeksforGeeks | Skilled in building modern web solutions.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="container mx-auto px-4 mt-16 max-w-7xl relative z-10"
      aria-label="Education and Work Experience"
    >
      {/* Heading */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }} // 👈 fix: content stays visible
        className="mb-8 bg-white/10 dark:bg-neutral-900/30 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-6"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400  uppercase">
          Work Experience
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded " />
        <p className="text-center text-gray-800 dark:text-gray-200 max-w-xl mx-auto">
          📌 My academic background and professional journey in software
          development.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experienceList.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }} // 👈 fix
            >
              <Card
                className="hover:shadow-2xl hover:shadow-indigo-200/40 dark:hover:shadow-indigo-900/40 
  transition-all duration-300 hover:-translate-y-2 
  bg-gradient-to-br from-white to-slate-50 dark:from-neutral-900 dark:to-neutral-800 
  border border-gray-200 dark:border-gray-700 rounded-2xl"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <Icon
                    className="text-3xl text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  <CardTitle className="mt-3 text-gray-900 dark:text-gray-100">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.subtitle}
                  </p>
                  <Badge
                    variant={item.type === "work" ? "default" : "secondary"}
                    className="mt-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {item.date}
                  </Badge>
                </CardHeader>
                {item.description && (
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

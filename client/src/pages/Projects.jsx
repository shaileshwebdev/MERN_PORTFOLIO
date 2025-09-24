import React from "react";
import { motion } from "framer-motion";
import ems from "../assets/EMS.png";
import cnc from "../assets/CNC.png";
import yt from "../assets/YT.png";
import noteApp from "../assets/NoteApp.png";

const Projects = () => {
  const cardVariant = {
    hidden: { rotate: -180, scale: 0.5, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "ChitNChat Instant Messaging App",
      image: cnc,
      tech: ["Node", "Express", "React", "MongoDB"],
      tag: "Full Stack App",
      link: "https://github.com/shaileshsahani/chitnchat",
    },
    {
      title: "Employee Management System",
      image: ems,
      tech: ["Node", "Express", "React", "MongoDB"],
      tag: "Full Stack",
      link: "https://employeemanagementsystem-3-s7ov.onrender.com",
    },

    {
      title: "Youtube Clone",
      image: yt,
      tech: ["NextJs", "ShadcnUI", "YoutubeApi"],
      tag: "Frontend",
      link: "https://youtubefree20.netlify.app",
    },
    {
      title: "Advanced Authentication System Note App",
      image: noteApp,
      tech: ["Node", "Express", "JWT", "Nodemailer", "React"],
      tag: "Backend",
      link: "https://mern-authentication-authorization-s-seven.vercel.app/signup",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-16 px-6 md:px-12 lg:px-24"
      aria-label="Featured projects showcasing full-stack, mobile, and backend development"
    >
      <div className="relative z-10 bg-white/10 dark:bg-neutral-900/30 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 uppercase">
          Top Recent Projects
        </h2>
        <div className="w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto my-4 rounded" />

        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Here are some of my featured projects showcasing full-stack, mobile,
          and backend development skills.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative h-full rounded-2xl overflow-hidden flex flex-col
                   bg-gradient-to-br from-white/30 to-slate-100/20 
                   dark:from-neutral-800/40 dark:to-neutral-900/40 
                   backdrop-blur-xl border border-gray-200/20 
                   shadow-md hover:shadow-indigo-300/40 
                   dark:hover:shadow-indigo-900/50 
                   transition-all duration-500"
          >
            {/* Badge */}
            <span className="absolute top-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-br-xl text-sm font-medium z-10">
              {project.tag}
            </span>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 px-4 mt-3">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 text-xs px-3 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            {/* Card Body */}
            <div className="p-5 text-center flex flex-col flex-grow justify-between">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-3">
                {project.title}
              </h3>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-6 py-2 
                       bg-gradient-to-r from-indigo-500 to-purple-600 
                       text-white rounded-full font-medium 
                       hover:opacity-90 border-2 border-transparent 
                       transition-colors duration-300"
                aria-label={`View project: ${project.title}`}
              >
                View
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

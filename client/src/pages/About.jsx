import React from "react";
import myImage from "../assets/picofme.png";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 md:px-8 py-10"
    >
      <Card
        className="
      max-w-5xl mx-auto rounded-2xl shadow-lg
      bg-white/10 dark:bg-neutral-900/30
      backdrop-blur-xl border border-white/20 dark:border-neutral-700
      transition-all duration-300
    "
      >
        <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img
              src={myImage}
              alt="Profile"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* About Content */}
          <div className="text-center md:text-left space-y-4 max-w-xl">
            <h1 className="relative text-3xl font-bold text-gray-900 dark:text-gray-100 inline-block pb-2">
              About Me
              {/* underline matches the heading width */}
              <span className="absolute left-0 -bottom-1 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            </h1>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Hi, I'm <span className="font-semibold">Shailesh Sahani</span>, a
              passionate and dedicated{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                MERN Stack Developer
              </span>{" "}
              from India. I specialize in building full-stack applications using{" "}
              MongoDB, Express.js, React.js, and Node.js. I’ve developed
              real-world projects including e-commerce platforms, employee
              management systems, and responsive portfolios.
              <br />
              <br />
              With{" "}
              <span className="font-semibold">
                8 months teaching experience
              </span>
              , I’ve strengthened my communication and problem-solving skills. I
              aim to write clean, scalable, and efficient code while
              continuously learning and preparing for MNC interviews.
              <br />
              <br />
              When I’m not coding, I explore new tech trends, mentor others, and
              practice English speaking for better global communication.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default About;

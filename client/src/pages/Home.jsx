import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/Shailesh_Sahani_Mern_Resume.pdf";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-24 text-center bg-transparent"
      aria-label="Home section with introduction and call to action"
    >
      {/* <ParticlesComponent /> */}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <h2 className=" text-2xl md:text-xl text-gray-700 dark:text-gray-300 mb-2">
          Hi 👋 I'm <span className="font-semibold">Shailesh Sahani</span>
        </h2>

        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6 min-h-[3rem]">
          <Typewriter
            options={{
              strings: [
                "FullStack Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=9120065531"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-medium transition-all duration-300 shadow-md"
          >
            Hire Me
          </a>
          <a
            href={Resume}
            download="Shailesh_Sahani_Resume.pdf"
            className="px-6 py-3 rounded-xl border-2 border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white font-medium transition-all duration-300 shadow-md"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Social Icons bottom-right */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a
          href="https://github.com/shaileshwebdev"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 text-2xl transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shailesh-sahani-7a7600275"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-purple-500 text-2xl transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/shaileshsahani_webdev/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 text-2xl transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Education from "./pages/Education";
import Techstack from "./pages/Techstack";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useTheme } from "./components/context/ThemeContext";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [theme] = useTheme();

  return (
    <div
      id={theme}
      className="bg-background text-foreground min-h-screen flex flex-col font-sans"
    >
      <CustomCursor />
      {/* <ParticlesComponent id="tsparticles" /> */}
      {/* Notifications */}
      <ToastContainer />

      {/* Navigation */}
      <Navbar />

      {/* Layout wrapper */}
      <Layout />

      {/* Main content container */}
      <main className="container mx-auto px-4 flex-grow space-y-16">
        <About />
        <Separator />

        <Education />
        <Separator />

        <Techstack />
        <Separator />

        <Projects />
        <Separator />

        <Experience />
        <Separator />

        <Contact />
      </main>

      {/* Footer with animation */}
      <motion.footer
        className="text-center mt-8 pb-6 text-sm text-muted-foreground"
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: [0, 5, -5, 5, -5, 0], scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
        aria-label="Footer"
      >
        <Card className="w-fit mx-auto px-6 py-3 shadow-md bg-muted/40">
          <h4 className="text-sm md:text-base font-medium">
            Made By 💚 <span className="font-bold">Shailesh Sahani</span> &copy;{" "}
            {new Date().getFullYear()}
          </h4>
        </Card>
      </motion.footer>
    </div>
  );
}

export default App;

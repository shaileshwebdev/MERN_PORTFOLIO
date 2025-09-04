import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import IMG_URL from "../assets/contact.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // Optional: avoid any SSR/hydration flicker in Next.js
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }
    try {
      const res = await axios.post(`${API}/api/v1/portfolio/sendEmail`, {
        name,
        email,
        msg,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  if (!mounted) return null; // safe if you're on Next.js; remove if CRA/Vite

  return (
    <section id="contact" className="relative z-10 px-4 sm:px-6 md:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left: Image */}
        <div
          className="
        rounded-2xl overflow-hidden shadow-lg
        bg-white/15 dark:bg-black/25 backdrop-blur-lg
        border border-white/25
      "
        >
          <img
            src={IMG_URL}
            alt="Contact illustration"
            className="w-full h-full object-cover block select-none"
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/contact-fallback.jpg";
            }}
          />
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="rounded-2xl bg-white/20 dark:bg-neutral-900/30 backdrop-blur-xl border border-white/30 shadow-xl">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <h2
                className="text-2xl font-bold text-center 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent uppercase"
              >
                Contact Me
              </h2>

              {/* Social */}
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/shailesh-sahani-7a7600275"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <BsLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/shaileshwebdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <BsGithub size={28} />
                </a>
                <a
                  href="https://www.instagram.com/shaileshsahani_webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                >
                  <BsInstagram size={28} />
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                <span className="text-gray-600 dark:text-gray-400 text-sm select-none">
                  OR
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <Input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/30 dark:bg-neutral-800/50 backdrop-blur-md border border-transparent focus:border-indigo-500 focus:ring focus:ring-purple-500/40"
                />
                <Input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/30 dark:bg-neutral-800/50 backdrop-blur-md border border-transparent focus:border-indigo-500 focus:ring focus:ring-purple-500/40"
                />
                <Textarea
                  placeholder="Write your Message"
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                  className="bg-white/30 dark:bg-neutral-800/50 backdrop-blur-md border border-transparent focus:border-pink-500 focus:ring focus:ring-purple-500/40"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
              hover:opacity-90 text-white rounded-lg shadow-md transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

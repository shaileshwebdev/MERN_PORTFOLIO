import React from "react";
import myImage from "../assets/picofme (1).png";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "home", label: "Home", icon: <FcHome /> },
  { id: "about", label: "About", icon: <FcAbout /> },
  { id: "education", label: "Education", icon: <FcReadingEbook /> },
  { id: "techstack", label: "Tech Stack", icon: <FcBiotech /> },
  { id: "projects", label: "Projects", icon: <FcVideoProjector /> },
  { id: "work", label: "Work Experience", icon: <FcPortraitMode /> },
  { id: "contact", label: "Contact", icon: <FcBusinessContact /> },
];

const Menus = ({ toggle }) => {
  return (
    <div className="flex flex-col items-center text-white w-full">
      {/* Profile Picture */}
      {toggle && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-6 flex justify-center"
        >
          <img
            src={myImage}
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover border-4 border-primary shadow-md"
          />
        </motion.div>
      )}

      {/* Menu Items */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
        aria-label="Main navigation"
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ id, label, icon }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                  "cursor-pointer hover:bg-primary/20 hover:text-primary",
                  "text-sm sm:text-base"
                )}
                activeClass="bg-primary/30 text-primary"
              >
                <span className="text-xl">{icon}</span>
                {toggle && <span className="font-medium">{label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Menus;

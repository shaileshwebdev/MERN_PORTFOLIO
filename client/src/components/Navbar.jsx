import React, { useState } from "react";
import { Link } from "react-scroll";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "../components/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import myAvatar from "../assets/picofme.png";

const navItems = [
  { to: "projects", icon: <FcVideoProjector />, label: "Projects" },
  { to: "techstack", icon: <FcBiotech />, label: "Tech Stack" },
  { to: "experience", icon: <FcPortraitMode />, label: "Work Experience" },
  { to: "education", icon: <FcReadingEbook />, label: "Education" },
  { to: "about", icon: <FcAbout />, label: "About" },
  { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, , toggleTheme] = useTheme();

  const handleMenuClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title / Logo */}
          <div className="flex items-center gap-2">
            <img
              src={myAvatar}
              alt="My Avatar"
              className="h-11 w-11 rounded-full object-cover cursor-pointer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6 text-lg font-medium">
            {navItems.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                offset={-100}
                duration={500}
                className=" flex items-center gap-2 cursor-pointer text-gray-800 dark:text-gray-300 transition-all duration-300 group"
              >
                {icon}
                <span
                  className="
      transition-all duration-300
      group-hover:text-transparent group-hover:bg-clip-text 
      group-hover:bg-gradient-to-r group-hover:from-indigo-500 
      group-hover:via-purple-500 group-hover:to-pink-500
    "
                >
                  {label}
                </span>
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
            rounded-full border border-gray-300 
            hover:border-indigo-500 hover:shadow-lg 
            transition-all duration-300
          "
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-indigo-400" />
              ) : (
                <Moon className="h-5 w-5 text-purple-500" />
              )}
            </Button>
          </div>

          {/* Mobile Hamburger + Theme Toggle */}
          <div className="sm:hidden flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
            rounded-full border border-gray-300 
            hover:border-indigo-500 hover:shadow-lg
            transition-all duration-300
          "
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-indigo-400" />
              ) : (
                <Moon className="h-5 w-5 text-purple-500" />
              )}
            </Button>

            {/* Hamburger Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border border-gray-300 hover:border-pink-500 transition-all"
                  aria-label="Open menu"
                >
                  <GiHamburgerMenu size={22} />
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col gap-6 mt-8 text-lg font-medium">
                  {navItems.map(({ to, icon, label }) => (
                    <Link
                      key={to}
                      to={to}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="
                    flex items-center gap-3 cursor-pointer 
                    text-gray-800 dark:text-gray-300
                    hover:text-transparent hover:bg-clip-text 
                    hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                    transition-all duration-300
                  "
                      onClick={handleMenuClick}
                    >
                      {icon} {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

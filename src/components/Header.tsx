import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const { scrollY } = useScroll();
  
  const titleOpacity = useTransform(scrollY, [300, 400], [0, 1]);
  const titleScale = useTransform(scrollY, [300, 400], [0.8, 1]);
  const iconsOpacity = useTransform(scrollY, [500, 600], [0, 1]);
  const iconsScale = useTransform(scrollY, [500, 600], [0.8, 1]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <motion.span
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
          >
            Flutter Developer
          </motion.span>
          <motion.div
            style={{ opacity: iconsOpacity, scale: iconsScale }}
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/muzzammil763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:deadbase763@gmail.com"
              className="p-2 rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('skills')}
            className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
          >
            Pricing
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
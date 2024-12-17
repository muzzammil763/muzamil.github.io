import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const titleScale = useTransform(scrollY, [0, 100], [0, 1]);
  const titleOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="flex items-center gap-6"
        >
          {isScrolled && (
            <>
              <span className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black">
                Flutter Developer
              </span>
              <div className="flex items-center gap-2">
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
              </div>
            </>
          )}
        </motion.div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </motion.header>
  );
};

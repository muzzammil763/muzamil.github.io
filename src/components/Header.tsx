import { Menu, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./header/ThemeToggle";
import { GlassToggle } from "./header/GlassToggle";
import { Navigation } from "./header/Navigation";
import { SocialLinks } from "./header/SocialLinks";
import logoM from "@/assets/logo-m.png";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isGlass, setIsGlass] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    if (isGlass) {
      document.body.classList.remove(`glass`, `light`, `dark`);
      document.body.classList.add(`glass`, newTheme);
    }
  };

  const toggleGlass = () => {
    setIsGlass(!isGlass);
    if (!isGlass) {
      document.body.classList.add("glass", theme);
      document.documentElement.classList.add("glass", theme);
    } else {
      document.body.classList.remove("glass", "light", "dark");
      document.documentElement.classList.remove("glass", "light", "dark");
      document.body.classList.add(theme);
      document.documentElement.classList.add(theme);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setIsSheetOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isGlass 
          ? `glass ${theme}`
          : "backdrop-blur-md bg-white/30 dark:bg-black/30"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoM} 
                alt="M Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <GlassToggle isGlass={isGlass} toggleGlass={toggleGlass} />
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold whitespace-nowrap hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black">
              Flutter Developer
            </span>
            
            {!isMobile && (
              <a
                href="https://github.com/muzzammil763"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          {isMobile ? (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black transition-colors">
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-[240px] sm:w-[280px] bg-background/95 backdrop-blur-md border-l border-border">
                <div className="flex flex-col gap-4 pt-10">
                  <Navigation scrollToSection={scrollToSection} />
                  {isMobile && (
                    <div className="flex flex-col gap-4 mt-4">
                      <a
                        href="https://github.com/muzzammil763"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-4">
              <Navigation scrollToSection={scrollToSection} />
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};
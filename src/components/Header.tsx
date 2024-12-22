import { Moon, Sun, Menu, Lightbulb, Package, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Github, Mail } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const { scrollY } = useScroll();
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
  };

  const scrollToSection = (sectionId: string) => {
    setIsSheetOpen(false); // Close the sheet first
    setTimeout(() => { // Add a small delay to allow sheet closing animation
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const NavButtons = () => (
    <>
      <button
        onClick={() => scrollToSection('skills')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <Lightbulb className="w-4 h-4" />
        Skills
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <Package className="w-4 h-4" />
        Projects
      </button>
      <button
        onClick={() => scrollToSection('pricing')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <DollarSign className="w-4 h-4" />
        Pricing
      </button>
      {isMobile && (
        <div className="flex flex-col gap-4 mt-4">
          <a
            href="https://github.com/muzzammil763"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="mailto:deadbase763@gmail.com"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      )}
    </>
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>

            <span className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold whitespace-nowrap hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black">
              Flutter Developer
            </span>
            
            {!isMobile && (
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/muzzammil763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:deadbase763@gmail.com"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {isMobile ? (
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 rounded-full bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[240px] sm:w-[280px] bg-background/95 backdrop-blur-md border-l border-border">
                <div className="flex flex-col gap-4 pt-10">
                  <NavButtons />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center gap-4">
              <NavButtons />
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};
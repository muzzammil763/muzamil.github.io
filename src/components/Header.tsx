import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./header/ThemeToggle";
import { GlassToggle } from "./header/GlassToggle";
import { Navigation } from "./header/Navigation";
import { SocialLinks } from "./header/SocialLinks";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isGlass, setIsGlass] = useState(false);
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

  const toggleGlass = () => {
    setIsGlass(!isGlass);
    if (!isGlass) {
      document.documentElement.classList.add("glass");
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("glass");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("dark");
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
      className={`fixed top-0 left-0 right-0 z-50 ${
        isGlass 
          ? "glass light dark:glass dark" 
          : "backdrop-blur-md bg-white/30 dark:bg-black/30"
      } transition-colors`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <GlassToggle isGlass={isGlass} toggleGlass={toggleGlass} />
            </div>

            <span className="px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold whitespace-nowrap hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black">
              Flutter Developer
            </span>
            
            {!isMobile && <SocialLinks />}
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
                      <SocialLinks />
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
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiRedux, 
  SiHtml5, 
  SiCss3, 
  SiJavascript,
  SiReact,
  SiSupabase,
  SiPostman,
  SiGit
} from "react-icons/si";
import { useState } from "react";

const skills = [
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiSupabase, name: "Supabase" },
];

export const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  // Effect to cycle through icons when hovering
  const startIconCycle = () => {
    setIsHovering(true);
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % skills.length);
    }, 2500); // Changed to 2.5 seconds
    return interval;
  };

  const stopIconCycle = () => {
    setIsHovering(false);
    setCurrentIconIndex(0);
  };

  const CurrentIcon = skills[currentIconIndex].icon;

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-display font-bold mb-4 text-[#0c4af3] dark:text-[#4c7af9]">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c4af3] to-[#4c7af9] p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-black p-2">
                <img
                  src="/lovable-uploads/4ffa1163-5685-4b79-a749-178ffae71e5e.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4 text-left"
          >
            <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
              Hi there! I'm a 21-year-old Flutter Developer with a passion for creating beautiful and functional mobile applications. With 2 years of experience in Flutter development, I've honed my skills in building responsive and user-friendly applications.
            </p>
            <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
              I've had the opportunity to work with Flutter Flow for three months at a private company, where I gained valuable experience in rapid prototyping and development. My expertise includes working with various technologies including Flutter, Dart, Firebase, and other modern development tools.
            </p>
            <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">
              I'm constantly learning and staying up-to-date with the latest developments in the Flutter ecosystem to deliver the best possible solutions for mobile applications.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.div
            className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#0c4af3] to-[#4c7af9] p-1 cursor-pointer"
            onMouseEnter={() => {
              const interval = startIconCycle();
              return () => clearInterval(interval);
            }}
            onMouseLeave={stopIconCycle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center">
              <motion.div
                key={currentIconIndex}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-3/4 h-3/4"
              >
                <CurrentIcon className="w-full h-full text-[#0c4af3] dark:text-[#4c7af9]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
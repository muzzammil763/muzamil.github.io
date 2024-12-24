import { motion } from "framer-motion";
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
import { TbBrandFlutter } from "react-icons/tb";

const skills = [
  { name: "Flutter", icon: TbBrandFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Firebase", icon: SiFirebase },
  { name: "State Management", icon: SiRedux },
  { name: "React", icon: SiReact },
  { name: "Supabase", icon: SiSupabase },
  { name: "REST APIs", icon: SiPostman },
  { name: "Git", icon: SiGit },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Skills = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const startIconCycle = () => {
    setIsHovering(true);
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // Change icon every 2 seconds
    return interval;
  };

  const stopIconCycle = () => {
    setIsHovering(false);
    setCurrentIconIndex(0);
  };

  const CurrentIcon = skills[currentIconIndex].icon;

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-display font-bold mb-4 text-[#0c4af3] dark:text-[#4c7af9]">
            Skills
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
            Technologies & Tools I Work With
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
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
              <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center p-8">
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
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)"
                }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#0c4af3]/50 dark:hover:border-[#4c7af9]/50 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm"
              >
                <skill.icon className="w-12 h-12 text-[#0c4af3] dark:text-[#4c7af9]" />
                <span className="font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
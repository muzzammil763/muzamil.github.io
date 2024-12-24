import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

const skills = [
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiDart, name: "Dart" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiRedux, name: "State Management" },
  { icon: SiReact, name: "React" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiPostman, name: "REST APIs" },
  { icon: SiGit, name: "Git" },
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
];

export const About = () => {
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
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="group hover:border-[#0c4af3] dark:hover:border-[#4c7af9]"
              >
                <SiFlutter className="mr-2 h-5 w-5 text-[#0c4af3] dark:text-[#4c7af9] group-hover:animate-spin" />
                View My Tech Stack
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid grid-cols-3 gap-4 p-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <skill.icon className="h-8 w-8 text-[#0c4af3] dark:text-[#4c7af9]" />
                    <span className="text-xs text-center font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
      </div>
    </section>
  );
};
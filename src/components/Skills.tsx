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
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Skills
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Technologies & Tools I Work With
          </p>
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
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm"
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <span className="font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
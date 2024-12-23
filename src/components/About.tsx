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

export const About = () => {
  const skills = [
    { icon: SiFlutter, label: "Flutter", angle: 0 },
    { icon: SiDart, label: "Dart", angle: 32.7 },
    { icon: SiFirebase, label: "Firebase", angle: 65.4 },
    { icon: SiRedux, label: "State Management", angle: 98.1 },
    { icon: SiReact, label: "React", angle: 130.8 },
    { icon: SiSupabase, label: "Supabase", angle: 163.5 },
    { icon: SiPostman, label: "REST APIs", angle: 196.2 },
    { icon: SiGit, label: "Git", angle: 229.9 },
    { icon: SiHtml5, label: "HTML", angle: 262.6 },
    { icon: SiCss3, label: "CSS", angle: 295.3 },
    { icon: SiJavascript, label: "JavaScript", angle: 328 }
  ];

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
            className="relative w-64 h-64"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#0c4af3] to-[#4c7af9] p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-black p-2">
                <img
                  src="/placeholder.svg"
                  alt="Anonymous Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  transform: `rotate(${skill.angle}deg) translateY(-120px)`,
                  transformOrigin: "center center",
                }}
              >
                <div
                  className="bg-white dark:bg-black shadow-lg rounded-full p-3 flex items-center justify-center hover:scale-110 transition-transform"
                  style={{
                    transform: `rotate(-${skill.angle}deg)`,
                  }}
                >
                  <skill.icon className="w-6 h-6 text-[#0c4af3] dark:text-[#4c7af9]" />
                </div>
              </motion.div>
            ))}
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
      </div>
    </section>
  );
};
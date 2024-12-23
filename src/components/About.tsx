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

export const About = () => {
  const skills = [
    { icon: TbBrandFlutter, label: "Flutter", angle: 0 },
    { icon: SiDart, label: "Dart", angle: 45 },
    { icon: SiFirebase, label: "Firebase", angle: 90 },
    { icon: SiRedux, label: "State Management", angle: 135 },
    { icon: SiReact, label: "React", angle: 180 },
    { icon: SiSupabase, label: "Supabase", angle: 225 },
    { icon: SiPostman, label: "REST APIs", angle: 270 },
    { icon: SiGit, label: "Git", angle: 315 }
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
            className="relative w-80 h-80"
          >
            {/* Central Profile Picture */}
            <div className="absolute inset-0 m-auto w-48 h-48">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0c4af3] to-[#4c7af9] p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-black p-2">
                  <img
                    src="/placeholder.svg"
                    alt="Anonymous Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Orbital Skills */}
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${skill.angle}deg) translate(120px) rotate(-${skill.angle}deg)`,
                  marginLeft: "-20px",
                  marginTop: "-20px",
                }}
              >
                <div
                  className="bg-white dark:bg-black shadow-lg rounded-full p-3 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group relative"
                >
                  <skill.icon className="w-8 h-8 text-[#0c4af3] dark:text-[#4c7af9]" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded">
                    {skill.label}
                  </span>
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
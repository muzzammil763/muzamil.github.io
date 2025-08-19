import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCode } from "./AnimatedCode";

// Custom Pinterest Icon Component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

export const Hero = () => {
  const socialLinks = [
    { href: "https://github.com/muzzammil763", icon: Github, external: true },
    { href: "https://www.linkedin.com/in/muzamil-ghafoor-181840344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: Linkedin, external: true },
    { href: "https://x.com/muzzammil763?s=21", icon: Twitter, external: true },
    { href: "https://pin.it/5PO5GlT6c", icon: PinterestIcon, external: true, isCustomIcon: true },
    { href: "https://www.instagram.com/muzamil.2004?igsh=OGEzMThpZXJreGZi&utm_source=qr", icon: Instagram, external: true },
    { href: "mailto:deadbase763@gmail.com", icon: Mail, external: false }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4 text-black dark:text-white px-2"
          >
            Muzamil Ghafoor
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 sm:px-6 py-2 mx-2 rounded-full bg-black/10 dark:bg-white/10 text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Flutter Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight text-[#0c4af3] dark:text-[#4c7af9] px-2"
          >
            Building Beautiful Mobile Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto px-2"
          >
            I Craft Elegant & Performant Mobile Applications Using Flutter & Dart,
            With Almost 2 Years of Professional Experience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 mb-6 sm:mb-8 px-2 flex-wrap"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="p-2 sm:p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8 sm:mb-12 px-2"
          >
            <AnimatedCode />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { RiPinterestFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { AnimatedCode } from "./AnimatedCode";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 text-black dark:text-white"
          >
            Muzamil Ghafoor
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-6 py-2 rounded-full bg-black/10 dark:bg-white/10 text-lg md:text-xl font-semibold mb-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Flutter Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-[#0c4af3] dark:text-[#4c7af9]"
          >
            Building Beautiful Mobile Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto"
          >
            I Craft Elegant & Performant Mobile Applications Using Flutter & Dart,
            With Almost 2 Years of Professional Experience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 pt-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/muzzammil763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/muzamil-ghafoor-181840344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/muzzammil763?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://pin.it/5PO5GlT6c"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <RiPinterestFill className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/muzamil.2004?igsh=OGEzMThpZXJreGZi&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:deadbase763@gmail.com"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <AnimatedCode />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
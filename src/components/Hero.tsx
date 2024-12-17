import { Github, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-block px-6 py-2 rounded-full bg-black/10 dark:bg-white/10 text-lg md:text-xl font-semibold mb-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
            Flutter Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Building Beautiful Mobile Experiences
          </h1>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            I Craft Elegant & Performant Mobile Applications Using Flutter & Dart,
            With Almost 2 Years of Professional Experience
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/muzzammil763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:deadbase763@gmail.com"
              className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
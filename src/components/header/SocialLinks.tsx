import { Github, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://github.com/muzzammil763"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <Github className="w-4 h-4" />
      </a>
      <a
        href="mailto:deadbase763@gmail.com"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <Mail className="w-4 h-4" />
      </a>
    </div>
  );
};
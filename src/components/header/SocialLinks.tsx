import { Github, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { RiPinterestFill } from "react-icons/ri";

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
        href="https://www.linkedin.com/in/muzamil-ghafoor-181840344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href="https://x.com/muzzammil763?s=21"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href="https://pin.it/5PO5GlT6c"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <RiPinterestFill className="w-4 h-4" />
      </a>
      <a
        href="https://www.instagram.com/muzamil.2004?igsh=OGEzMThpZXJreGZi&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-black/90 transition-colors dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        <Instagram className="w-4 h-4" />
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
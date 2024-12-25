import { User2, Lightbulb, Package, DollarSign, Quote } from "lucide-react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <>
      <button
        onClick={() => scrollToSection('about')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <User2 className="w-4 h-4" />
        About
      </button>
      <button
        onClick={() => scrollToSection('skills')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <Lightbulb className="w-4 h-4" />
        Skills
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <Package className="w-4 h-4" />
        Projects
      </button>
      <button
        onClick={() => scrollToSection('pricing')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <DollarSign className="w-4 h-4" />
        Pricing
      </button>
      <button
        onClick={() => scrollToSection('quotes')}
        className="flex items-center gap-2 w-full px-4 py-1.5 rounded-full bg-black/10 text-sm font-semibold hover:bg-black hover:text-white transition-colors dark:bg-white/10 dark:hover:bg-white dark:hover:text-black text-left"
      >
        <Quote className="w-4 h-4" />
        Quotes
      </button>
    </>
  );
};
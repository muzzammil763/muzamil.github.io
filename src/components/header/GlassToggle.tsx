import { Glasses } from "lucide-react";
import { Button } from "../ui/button";

interface GlassToggleProps {
  isGlass: boolean;
  toggleGlass: () => void;
}

export const GlassToggle = ({ isGlass, toggleGlass }: GlassToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleGlass}
      className={`w-8 h-8 rounded-full ${
        isGlass 
          ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
          : "bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
      } transition-colors`}
    >
      <Glasses className="h-4 w-4" />
    </Button>
  );
};
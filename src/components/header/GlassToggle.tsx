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
      className={`w-8 h-8 rounded-full transition-all duration-300 ${
        isGlass 
          ? "bg-[#0c4af3] dark:bg-[#4c7af9] text-white hover:bg-[#0c4af3]/90 dark:hover:bg-[#4c7af9]/90"
          : "bg-black/10 hover:bg-black hover:text-white dark:bg-white/10 dark:hover:bg-white dark:hover:text-black"
      }`}
    >
      <Glasses className="h-4 w-4" />
    </Button>
  );
};
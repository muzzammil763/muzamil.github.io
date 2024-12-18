import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const dartCode = `
// Flutter App Example
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    );
  }
}`.trim();

export const AnimatedCode = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < dartCode.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + dartCode[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Reset after completion
      const timeout = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setText("");
          setCurrentIndex(0);
          setIsVisible(true);
        }, 1000);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-xl mx-auto p-4 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl overflow-hidden"
        >
          <pre className="font-mono text-sm md:text-base whitespace-pre-wrap break-words">
            <code>
              {text.split('\n').map((line, i) => (
                <div key={i} className="leading-relaxed">
                  {line.split(' ').map((word, j) => {
                    let className = "text-white/80";
                    if (word.includes("class")) className = "text-[#54C5F8]";
                    if (word.includes("extends")) className = "text-[#54C5F8]";
                    if (word.includes("@override")) className = "text-[#54C5F8]";
                    if (word.includes("return")) className = "text-[#54C5F8]";
                    if (word.includes("MaterialApp")) className = "text-[#54C5F8]";
                    if (word.includes("Scaffold")) className = "text-[#54C5F8]";
                    if (word.includes("Center")) className = "text-[#54C5F8]";
                    if (word.includes("Text")) className = "text-[#54C5F8]";
                    if (word.includes("Widget")) className = "text-[#54C5F8]";
                    if (word.includes("'")) className = "text-[#A5D6A7]";
                    
                    return (
                      <span key={j} className={className + " mr-2"}>
                        {word}
                      </span>
                    );
                  })}
                </div>
              ))}
            </code>
          </pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
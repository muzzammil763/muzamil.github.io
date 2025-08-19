import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (!entry.isIntersecting) {
            setText("");
            setCurrentIndex(0);
            setIsWriting(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (codeRef.current) {
      observer.observe(codeRef.current);
    }

    return () => {
      if (codeRef.current) {
        observer.unobserve(codeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      if (isWriting) {
        // Writing phase
        if (currentIndex < dartCode.length) {
          setText((prev) => prev + dartCode[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Pause before starting to erase
          setTimeout(() => {
            setIsWriting(false);
            setCurrentIndex(dartCode.length - 1);
          }, 2000);
        }
      } else {
        // Erasing phase
        if (currentIndex >= 0) {
          setText(dartCode.substring(0, currentIndex));
          setCurrentIndex((prev) => prev - 1);
        } else {
          // Pause before starting to write again
          setTimeout(() => {
            setIsWriting(true);
            setCurrentIndex(0);
          }, 1000);
        }
      }
    }, isWriting ? 50 : 30); // Faster erasing than writing

    return () => clearTimeout(timeout);
  }, [currentIndex, isWriting, isInView]);

  return (
    <motion.div
      ref={codeRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-full mx-auto p-3 sm:p-4 md:p-6 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl overflow-x-auto"
    >
      <pre className="font-mono text-xs sm:text-sm md:text-base lg:text-lg text-left min-w-[280px] sm:min-w-[300px] overflow-x-auto">
        <code className="block whitespace-pre">
          {text.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line.split(' ').map((word, j) => {
                let className = "text-white/80";
                if (word.includes("//")) className = "text-[#6A9955] pl-0";
                else if (word.includes("class")) className = "text-[#569CD6]";
                else if (word.includes("extends")) className = "text-[#569CD6]";
                else if (word.includes("@override")) className = "text-[#569CD6]";
                else if (word.includes("return")) className = "text-[#C586C0]";
                else if (word.includes("MaterialApp")) className = "text-[#4EC9B0]";
                else if (word.includes("Scaffold")) className = "text-[#4EC9B0]";
                else if (word.includes("Center")) className = "text-[#4EC9B0]";
                else if (word.includes("Text")) className = "text-[#4EC9B0]";
                else if (word.includes("Widget")) className = "text-[#4EC9B0]";
                else if (word.includes("'")) className = "text-[#CE9178]";
                
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
      <div className="flex items-center gap-2 mt-3 text-xs text-white/60">
        <div className={`w-2 h-2 rounded-full ${isWriting ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
        <span>{isWriting ? 'Writing...' : 'Erasing...'}</span>
      </div>
    </motion.div>
  );
};
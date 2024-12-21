import { motion, AnimatePresence } from "framer-motion";
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
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
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
    if (isInView && currentIndex < dartCode.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + dartCode[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else if (isInView && currentIndex >= dartCode.length) {
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
  }, [currentIndex, isVisible, isInView]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={codeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-full mx-auto p-4 md:p-6 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl overflow-x-auto"
        >
          <pre className="font-mono text-sm md:text-base lg:text-lg text-left min-w-[300px] overflow-x-auto">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
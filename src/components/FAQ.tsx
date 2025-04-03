
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bug } from "lucide-react";

export const FAQ = () => {
  const [faqs] = useState([
    {
      question: "What makes Flutter different from other frameworks?",
      answer: "Flutter uses a unique approach with its own rendering engine, allowing for consistent UI across platforms. Unlike React Native or Xamarin, Flutter doesn't rely on platform-specific components but renders everything using its own high-performance rendering engine, Skia. This gives developers pixel-perfect control across all platforms."
    },
    {
      question: "Is Flutter only for mobile development?",
      answer: "No, Flutter has expanded beyond mobile. It now supports web, desktop (Windows, macOS, Linux), and even embedded devices. With Flutter's single codebase approach, you can deploy applications across multiple platforms while maintaining native performance and look-and-feel."
    },
    {
      question: "How does Flutter achieve such smooth animations?",
      answer: "Flutter is designed for 60fps (frames per second) performance. It uses the Skia rendering engine, the same engine that powers Google Chrome and Android. Flutter's architecture bypasses the need to use a JavaScript bridge (unlike React Native), allowing for faster execution and smoother animations."
    },
    {
      question: "What programming language does Flutter use?",
      answer: "Flutter uses Dart, a language developed by Google. Dart is optimized for UI development with features like hot reload, strong typing, and garbage collection. Its syntax is familiar to developers who know Java, JavaScript, or C#, making it relatively easy to learn."
    },
    {
      question: "How do I handle state management in Flutter?",
      answer: "Flutter offers multiple approaches to state management: setState for simple local state, InheritedWidget for sharing data down the widget tree, Provider for dependency injection, Bloc/Cubit for reactive programming, GetX for an all-in-one solution, and Riverpod as a Provider alternative. The best choice depends on your app's complexity and team preferences."
    }
  ]);

  const [commonBugs] = useState([
    {
      title: "setState() called after dispose()",
      solution: "This happens when you try to update state after a widget is removed. Always check if the widget is mounted before calling setState: if (mounted) setState(() {});"
    },
    {
      title: "Overflow errors in UI",
      solution: "Use Expanded, Flexible, or SingleChildScrollView to handle content that doesn't fit. For text specifically, use overflow properties like TextOverflow.ellipsis."
    },
    {
      title: "Images not loading on release build",
      solution: "Ensure assets are properly declared in pubspec.yaml and use correct asset paths. For network images, verify internet permissions in AndroidManifest.xml and Info.plist."
    },
    {
      title: "App crashes when accessing device features",
      solution: "Always check platform availability and handle permissions properly. Use try-catch blocks when accessing native features and implement graceful fallbacks."
    }
  ]);

  return (
    <section id="faq" className="py-20 glass-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center font-display">Flutter FAQs</h2>
        
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card p-2 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center font-display flex items-center justify-center gap-2">
            <Bug className="h-6 w-6" />
            Common Flutter Bugs & Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonBugs.map((bug, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2 text-primary">{bug.title}</h4>
                <p>{bug.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { useMemo, useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bug, HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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
    },
    {
      question: "Can I integrate native code with Flutter?",
      answer: "Yes. Use platform channels to communicate between Dart and native code (Kotlin/Java on Android, Swift/Objective‑C on iOS). You can invoke native APIs, reuse existing SDKs, and even write platform‑specific views when needed."
    },
    {
      question: "How big are Flutter app binaries?",
      answer: "A minimal release APK is typically around 4–10 MB depending on target ABI and obfuscation. Enabling split per‑ABI, tree‑shaking icons, and R8 can reduce sizes. iOS sizes vary due to bitcode and App Store packaging."
    },
    {
      question: "What are best practices for Flutter performance?",
      answer: "Avoid rebuilding large widget subtrees, use const constructors where possible, leverage RepaintBoundary for expensive paints, cache images, debounce costly work, and profile with the Flutter DevTools to identify jank sources."
    },
    {
      question: "How do widgets work in Flutter?",
      answer: "Widgets are immutable configuration objects. The framework builds an Element tree that manages widget lifecycles and a RenderObject tree for layout/paint. Rebuilding replaces widgets, but Elements and RenderObjects are efficiently updated."
    },
    {
      question: "What's the difference between hot reload and hot restart?",
      answer: "Hot reload injects updated source code into the running Dart VM, preserving state when possible. Hot restart fully restarts the app, losing state but ensuring a clean rebuild of the widget tree."
    },
    {
      question: "How do I manage dependencies in Flutter?",
      answer: "Use pubspec.yaml with pub.dev packages. Pin versions using caret or exact constraints, run `flutter pub get`, and use `flutter pub outdated` to audit. Favor well‑maintained packages and check for null‑safety support."
    },
    {
      question: "How do I test Flutter apps?",
      answer: "Flutter supports unit, widget, and integration tests. Use the flutter_test package, mock dependencies, run tests with `flutter test`, and use `integration_test` or third‑party tools for end‑to‑end flows."
    },
    {
      question: "Does Flutter support accessibility?",
      answer: "Yes. Use semantics widgets, provide labels, respect text scaling, ensure sufficient contrast, and test with TalkBack/VoiceOver. Flutter exposes accessibility features on both iOS and Android."
    },
    {
      question: "How do I build responsive layouts in Flutter?",
      answer: "Use LayoutBuilder, MediaQuery, Flexible/Expanded, and responsive widgets like OrientationBuilder. Consider breakpoints and packages like responsive_framework for multi‑device support."
    },
    {
      question: "StatelessWidget vs StatefulWidget — when to use which?",
      answer: "Use StatelessWidget for immutable UI that doesn't depend on changeable state. Use StatefulWidget when you need to manage local mutable state via setState or controllers (e.g., animations, form input)."
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

  // Search/filter state
  const [query, setQuery] = useState("");

  // View toggle state: show only a subset by default
  const [showAll, setShowAll] = useState(false);

  const filteredFaqs = useMemo(() => {
    if (!query.trim()) return faqs;
    const q = query.toLowerCase();
    return faqs.filter((f) =>
      f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  const visibleFaqs = useMemo(() => {
    const indexed = filteredFaqs.map((f, i) => ({ faq: f, index: i }));
    if (query.trim()) return indexed; // show all matches when searching
    return showAll ? indexed : indexed.slice(0, 4);
  }, [filteredFaqs, showAll, query]);

  return (
    <section id="faq" className="py-20 glass-section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Flutter FAQs
          </h2>
          <p className="mt-2 text-sm md:text-base text-foreground/70 max-w-2xl mx-auto">
            Search common questions about Flutter performance, state management, and multi‑platform support.
          </p>
        </div>

        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="pl-9 glass-card h-11"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-foreground/60">
            <span>{filteredFaqs.length} result{filteredFaqs.length === 1 ? "" : "s"}</span>
            <button
              onClick={() => setQuery("")}
              className="px-3 py-1.5 rounded-md glass-card hover:opacity-90"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="text-center text-foreground/60 glass-card rounded-xl p-8">
              No results. Try different keywords like "state", "animations", or "web".
            </div>
          ) : (
            <>
              <Accordion type="multiple" className="w-full space-y-4">
                {visibleFaqs.map(({ faq, index }) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card p-2 rounded-xl overflow-hidden border border-border/60 data-[state=open]:shadow-xl"
                  >
                    <AccordionTrigger className="group px-4 text-base md:text-lg font-medium hover:no-underline data-[state=open]:bg-black/5 dark:data-[state=open]:bg-white/5 rounded-lg">
                      <span className="flex items-center gap-3 text-left">
                        <span className="inline-flex h-6 w-6 items-center justify-center text-xs font-semibold rounded-md bg-primary/15 text-primary">
                          {index + 1}
                        </span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 text-sm md:text-base border-t border-border/50 mt-1 pt-4">
                      <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {!query.trim() && filteredFaqs.length > 4 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAll((s) => !s)}
                    className="px-4 py-2 rounded-md glass-card hover:opacity-90 text-sm"
                  >
                    {showAll ? "View less" : `View all (${filteredFaqs.length})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center font-display flex items-center justify-center gap-2">
            <Bug className="h-6 w-6" />
            Common Flutter Bugs & Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonBugs.map((bug, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                <h4 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2">
                  <Bug className="h-4 w-4" /> {bug.title}
                </h4>
                <p className="text-sm md:text-base text-foreground/80">{bug.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    category: "coding"
  },
  {
    text: "Flutter is not just a framework, it's a canvas for innovation.",
    author: "Anonymous",
    category: "flutter"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "motivation"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "coding"
  },
  {
    text: "Hot reload is not just a feature, it's a lifestyle.",
    author: "Flutter Developer",
    category: "flutter"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
    category: "coding"
  },
  {
    text: "Write code like your favorite developer has to maintain it.",
    author: "Anonymous",
    category: "coding"
  },
  {
    text: "Flutter makes it easy and fast to build beautiful apps for mobile and beyond.",
    author: "Google Flutter Team",
    category: "flutter"
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra",
    category: "motivation"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "coding"
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    category: "motivation"
  },
  {
    text: "Dart is designed for fast apps on any platform.",
    author: "Dart Team",
    category: "flutter"
  },
  {
    text: "It's not a bug – it's an undocumented feature.",
    author: "Anonymous",
    category: "coding"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Anonymous",
    category: "motivation"
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    category: "motivation"
  },
  {
    text: "Code never lies, comments sometimes do.",
    author: "Ron Jeffries",
    category: "coding"
  },
  {
    text: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
    category: "coding"
  }
];

export const Quotes = () => {
  return (
    <section id="quotes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-display font-bold mb-4 text-[#0c4af3] dark:text-[#4c7af9]">
            Quotes
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
            Inspirational Words from Tech & Life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#0c4af3]/50 dark:hover:border-[#4c7af9]/50 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm"
            >
              <Quote className="w-8 h-8 text-[#0c4af3] dark:text-[#4c7af9] mb-4" />
              <p className="text-lg mb-4 font-medium">{quote.text}</p>
              <p className="text-black/60 dark:text-white/60">- {quote.author}</p>
              <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-black/10 dark:bg-white/10">
                {quote.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
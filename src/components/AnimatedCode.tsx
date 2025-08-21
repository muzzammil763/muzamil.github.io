import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const codeSnippets = [
  `// Flutter App Example
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
}`,
  `// React Hook Example
const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initial);
  
  return { count, increment, decrement, reset };
};`,
  `// Python FastAPI Example
@app.post("/users/")
async def create_user(user: UserCreate):
    db_user = User(**user.dict())
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user`,
  `// Vue.js Component
<template>
  <div class="counter">
    <h2>{{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>`,
  `// Node.js Express Route
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
  `// TypeScript Interface
interface Product {
  id: string;
  name: string;
  price: number;
  category: 'electronics' | 'clothing' | 'books';
  inStock: boolean;
  tags?: string[];
}

const products: Product[] = [
  { id: '1', name: 'Laptop', price: 999, category: 'electronics', inStock: true }
];`,
  `// CSS Grid Layout
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 1.5rem;
}`,
  `// SQL Query Example
SELECT u.name, u.email, p.title, p.created_at
FROM users u
INNER JOIN posts p ON u.id = p.user_id
WHERE p.published = true
  AND p.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
ORDER BY p.created_at DESC
LIMIT 10;`,
  `// Go HTTP Handler
func getUserHandler(w http.ResponseWriter, r *http.Request) {
    userID := mux.Vars(r)["id"]
    
    user, err := getUserByID(userID)
    if err != nil {
        http.Error(w, "User not found", http.StatusNotFound)
        return
    }
    
    json.NewEncoder(w).Encode(user)
}`,
  `// Rust Struct & Implementation
#[derive(Debug, Clone)]
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    fn new(width: f64, height: f64) -> Self {
        Rectangle { width, height }
    }
    
    fn area(&self) -> f64 {
        self.width * self.height
    }
}`
].map(code => code.trim());

export const AnimatedCode = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriting, setIsWriting] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [usedSnippets, setUsedSnippets] = useState<number[]>([]);
  const codeRef = useRef(null);

  const currentCode = codeSnippets[currentSnippetIndex];

  const getNextSnippetIndex = () => {
    // If we've used all snippets, reset and start over
    if (usedSnippets.length >= codeSnippets.length) {
      setUsedSnippets([0]);
      return 0;
    }
    
    // Get available snippets (not yet used)
    const availableSnippets = codeSnippets
      .map((_, index) => index)
      .filter(index => !usedSnippets.includes(index));
    
    // Randomly select from available snippets
    const randomIndex = Math.floor(Math.random() * availableSnippets.length);
    return availableSnippets[randomIndex];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          if (!entry.isIntersecting) {
            setText("");
            setCurrentIndex(0);
            setIsWriting(true);
            setCurrentSnippetIndex(0);
            setUsedSnippets([]);
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
        if (currentIndex < currentCode.length) {
          setText((prev) => prev + currentCode[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Pause before starting to erase
          setTimeout(() => {
            setIsWriting(false);
            setCurrentIndex(currentCode.length - 1);
          }, 2000);
        }
      } else {
        // Erasing phase
        if (currentIndex >= 0) {
          setText(currentCode.substring(0, currentIndex));
          setCurrentIndex((prev) => prev - 1);
        } else {
          // Pause before starting next snippet
          setTimeout(() => {
            const nextSnippetIndex = getNextSnippetIndex();
            setCurrentSnippetIndex(nextSnippetIndex);
            setUsedSnippets(prev => [...prev, nextSnippetIndex]);
            setIsWriting(true);
            setCurrentIndex(0);
          }, 1000);
        }
      }
    }, isWriting ? 50 : 30); // Faster erasing than writing

    return () => clearTimeout(timeout);
  }, [currentIndex, isWriting, isInView, currentSnippetIndex, usedSnippets]);

  return (
    <motion.div
      ref={codeRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-full mx-auto p-3 sm:p-4 md:p-6 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl overflow-x-auto"
    >
      <pre className="font-mono text-xs sm:text-sm md:text-base lg:text-lg text-left min-w-[280px] sm:min-w-[300px] overflow-x-auto">
        <code className="block whitespace-pre relative">
          {text.split('\n').map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line.split(' ').map((word, j) => {
                let className = "text-white/80";
                if (word.includes("//") || word.includes("#")) className = "text-[#6A9955] pl-0";
                else if (word.includes("class") || word.includes("interface") || word.includes("struct")) className = "text-[#569CD6]";
                else if (word.includes("extends") || word.includes("implements") || word.includes("async") || word.includes("await")) className = "text-[#569CD6]";
                else if (word.includes("@override") || word.includes("@app") || word.includes("#[derive")) className = "text-[#569CD6]";
                else if (word.includes("return") || word.includes("const") || word.includes("let") || word.includes("var") || word.includes("func")) className = "text-[#C586C0]";
                else if (word.includes("MaterialApp") || word.includes("useState") || word.includes("useEffect")) className = "text-[#4EC9B0]";
                else if (word.includes("Scaffold") || word.includes("Center") || word.includes("Text") || word.includes("Widget")) className = "text-[#4EC9B0]";
                else if (word.includes("'") || word.includes('"') || word.includes("`")) className = "text-[#CE9178]";
                else if (word.includes("SELECT") || word.includes("FROM") || word.includes("WHERE") || word.includes("ORDER")) className = "text-[#569CD6]";
                
                return (
                  <span key={j} className={className + " mr-2"}>
                    {word}
                  </span>
                );
              })}
            </div>
          ))}
          <span className="text-white animate-pulse">|</span>
        </code>
      </pre>
      <div className="flex items-center gap-2 mt-3 text-xs text-white/60">
        <div className={`w-2 h-2 rounded-full ${isWriting ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
        <span>{isWriting ? 'Writing...' : 'Erasing...'}</span>
        <span className="ml-2">({currentSnippetIndex + 1}/10)</span>
      </div>
    </motion.div>
  );
};
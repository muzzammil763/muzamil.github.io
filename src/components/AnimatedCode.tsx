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
  `// Personal Info Widget
RichText(
  text: TextSpan(
    children: [
      TextSpan(
        text: 'Muzamil Ghafoor\\n',
        style: TextStyle(
          fontSize: 24,
          fontWeight: FontWeight.bold,
          color: Colors.blue,
        ),
      ),
      TextSpan(
        text: 'Flutter Developer\\n',
        style: TextStyle(
          fontSize: 18,
          color: Colors.grey[700],
        ),
      ),
      TextSpan(
        text: '2+ years of experience',
        style: TextStyle(
          fontSize: 16,
          color: Colors.green,
        ),
      ),
    ],
  ),
)`,
  `// Flutter ListView Builder
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return Card(
      child: ListTile(
        leading: Icon(Icons.star),
        title: Text(items[index].title),
        subtitle: Text(items[index].description),
        onTap: () => navigateToDetail(items[index]),
      ),
    );
  },
)`,
  `// Flutter HTTP Request
Future<User> fetchUser(int userId) async {
  final response = await http.get(
    Uri.parse('https://api.example.com/users/\$userId'),
    headers: {'Content-Type': 'application/json'},
  );
  
  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to load user');
  }
}`,
  `// Flutter State Management
class CounterProvider extends ChangeNotifier {
  int _counter = 0;
  
  int get counter => _counter;
  
  void increment() {
    _counter++;
    notifyListeners();
  }
  
  void decrement() {
    _counter--;
    notifyListeners();
  }
  
  void reset() {
    _counter = 0;
    notifyListeners();
  }
}`,
  `// Flutter Custom Widget
class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final Color? backgroundColor;
  
  const CustomButton({
    Key? key,
    required this.text,
    required this.onPressed,
    this.backgroundColor,
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: backgroundColor ?? Colors.blue,
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      ),
      child: Text(text),
    );
  }
}`,
  `// Flutter Animation Controller
class AnimatedWidget extends StatefulWidget {
  @override
  _AnimatedWidgetState createState() => _AnimatedWidgetState();
}

class _AnimatedWidgetState extends State<AnimatedWidget>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    );
    _animation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeInOut,
    );
    _controller.repeat(reverse: true);
  }
  
  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _animation,
      builder: (context, child) {
        return Transform.scale(
          scale: _animation.value,
          child: Container(
            width: 100,
            height: 100,
            color: Colors.blue,
          ),
        );
      },
    );
  }
}`,
  `// Flutter Form Validation
class LoginForm extends StatefulWidget {
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  
  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: _emailController,
            decoration: InputDecoration(labelText: 'Email'),
            validator: (value) {
              if (value?.isEmpty ?? true) {
                return 'Please enter your email';
              }
              return null;
            },
          ),
          TextFormField(
            controller: _passwordController,
            decoration: InputDecoration(labelText: 'Password'),
            obscureText: true,
            validator: (value) {
              if (value?.isEmpty ?? true) {
                return 'Please enter your password';
              }
              return null;
            },
          ),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState?.validate() ?? false) {
                // Process login
              }
            },
            child: Text('Login'),
          ),
        ],
      ),
    );
  }
}`,
  `// Flutter Navigation
class NavigationHelper {
  static void pushNamed(BuildContext context, String routeName) {
    Navigator.pushNamed(context, routeName);
  }
  
  static void pushReplacement(BuildContext context, Widget page) {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => page),
    );
  }
  
  static void pop(BuildContext context) {
    Navigator.pop(context);
  }
  
  static Future<T?> showCustomDialog<T>(
    BuildContext context,
    Widget dialog,
  ) {
    return showDialog<T>(
      context: context,
      builder: (context) => dialog,
    );
  }
}`,
  `// Flutter Themes & Colors
class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      primarySwatch: Colors.blue,
      brightness: Brightness.light,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.blue,
          foregroundColor: Colors.white,
        ),
      ),
    );
  }
  
  static ThemeData get darkTheme {
    return ThemeData(
      primarySwatch: Colors.blue,
      brightness: Brightness.dark,
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.grey[900],
        foregroundColor: Colors.white,
      ),
    );
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
      animate={{ 
        opacity: 1, 
        y: 0,
        height: "auto"
      }}
      transition={{ 
        opacity: { duration: 0.3 },
        y: { duration: 0.3 },
        height: { duration: 0.2, ease: "easeOut" }
      }}
      className="w-full max-w-full mx-auto p-3 sm:p-4 md:p-6 rounded-lg bg-black/90 backdrop-blur-sm shadow-xl overflow-x-auto"
      style={{
        minHeight: "fit-content",
        transition: "height 0.2s ease-out"
      }}
    >
      <motion.pre 
        className="font-mono text-xs sm:text-sm md:text-base lg:text-lg text-left min-w-[280px] sm:min-w-[300px] overflow-x-auto"
        animate={{ height: "auto" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <code className="block whitespace-pre relative">
          {text.split('\n').map((line, i) => (
            <motion.div 
              key={i} 
              className="leading-relaxed"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {line.split(' ').map((word, j) => {
                let className = "text-white/80";
                if (word.includes("//")) className = "text-[#6A9955] pl-0";
                else if (word.includes("class") || word.includes("Future") || word.includes("static")) className = "text-[#569CD6]";
                else if (word.includes("extends") || word.includes("with") || word.includes("async") || word.includes("await")) className = "text-[#569CD6]";
                else if (word.includes("@override") || word.includes("final") || word.includes("late")) className = "text-[#569CD6]";
                else if (word.includes("return") || word.includes("const") || word.includes("void") || word.includes("int") || word.includes("String")) className = "text-[#C586C0]";
                else if (word.includes("MaterialApp") || word.includes("StatelessWidget") || word.includes("StatefulWidget")) className = "text-[#4EC9B0]";
                else if (word.includes("Scaffold") || word.includes("Center") || word.includes("Text") || word.includes("Widget") || word.includes("RichText") || word.includes("TextSpan")) className = "text-[#4EC9B0]";
                else if (word.includes("ListView") || word.includes("Card") || word.includes("Container") || word.includes("Column") || word.includes("ElevatedButton")) className = "text-[#4EC9B0]";
                else if (word.includes("'") || word.includes('"') || word.includes("`")) className = "text-[#CE9178]";
                else if (word.includes("Colors.") || word.includes("Icons.")) className = "text-[#9CDCFE]";
                
                return (
                  <span key={j} className={className + " mr-2"}>
                    {word}
                  </span>
                );
              })}
            </motion.div>
          ))}
          <motion.span 
            className="text-white animate-pulse inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            |
          </motion.span>
        </code>
      </motion.pre>
      <div className="flex items-center gap-2 mt-3 text-xs text-white/60">
        <div className={`w-2 h-2 rounded-full ${isWriting ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
        <span>{isWriting ? 'Writing...' : 'Erasing...'}</span>
        <span className="ml-2">({currentSnippetIndex + 1}/10)</span>
      </div>
    </motion.div>
  );
};
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
};

export default Index;
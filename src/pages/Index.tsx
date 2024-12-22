import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Pricing } from "@/components/Pricing";
import { Quotes } from "@/components/Quotes";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Pricing />
      <Quotes />
    </main>
  );
};

export default Index;
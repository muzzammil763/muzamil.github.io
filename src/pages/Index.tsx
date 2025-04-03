
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Pricing } from "@/components/Pricing";
import { Quotes } from "@/components/Quotes";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Pricing />
      <Quotes />
      <FAQ />
    </main>
  );
};

export default Index;

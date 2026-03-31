import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import CV from "@/components/sections/CV";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <CV />
      <About />
      <Contact />
    </main>
  );
}
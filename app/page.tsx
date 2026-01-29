import { About } from "@/components/About";
import ContactForm from "@/components/ContactForm";
import { Projects } from "@/components/Project";
import { Hero } from "@/components/section/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

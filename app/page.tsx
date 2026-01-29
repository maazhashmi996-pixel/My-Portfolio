import ContactForm from "@/components/ContactForm";
import { Hero } from "@/components/section/hero";
import Portfolio from "@/components/section/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

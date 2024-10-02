import Hero from "@/components/ui/Hero";
import InfoCards from "@/components/ui/InfoCards";
import OurWork from "@/components/ui/OurWork";
import ProgrammesSection from "@/components/ui/ProgrammesSection";
import Template from "@/components/ui/Template";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoCards />
      <Template/>
      <OurWork />
      <ProgrammesSection />
    </>
  );
}

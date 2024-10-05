import Hero from "@/components/ui/Hero";
import InfoCards from "@/components/ui/InfoCards";
import OurWork from "@/components/ui/OurWork";
import ProgrammesSection from "@/components/ui/ProgrammesSection";
import Legacy from "@/components/ui/legacy";
import Temp from "@/components/ui/temp";

export default function Home() {
  return (
    <>
      <Temp />
      <Hero />
      <InfoCards />
      <Legacy />
      <OurWork />
      <ProgrammesSection />
    </>
  );
}

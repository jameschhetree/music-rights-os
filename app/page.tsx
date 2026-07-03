import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import BentoSection from "./sections/BentoSection";
import FeaturesSection from "./sections/FeaturesSection";
import DesireSection from "./sections/DesireSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WaitlistSection from "./sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <BentoSection />
        <FeaturesSection />
        <DesireSection />
        <TestimonialsSection />
        <PricingSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}

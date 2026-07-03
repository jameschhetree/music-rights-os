import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import ProblemsSection from "./sections/ProblemsSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import ComparisonSection from "./sections/ComparisonSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WaitlistSection from "./sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}

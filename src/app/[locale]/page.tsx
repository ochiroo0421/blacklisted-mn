import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-[#0A0C12]">
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

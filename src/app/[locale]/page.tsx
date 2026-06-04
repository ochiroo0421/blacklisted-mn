import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-black">
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

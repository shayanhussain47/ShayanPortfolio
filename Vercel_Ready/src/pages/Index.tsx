import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import SkillsRow from "@/components/SkillsRow";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/CursorFollower";
import GlobalLightLeaks from "@/components/GlobalLightLeaks";

const Index = () => {
  return (
    <div className="min-h-screen bg-black cursor-none">
      <GlobalLightLeaks />
      <CursorFollower />
      <Navbar />
      <HeroSection />
      <BrandMarquee />
      <SkillsRow />
      <ServicesGrid />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

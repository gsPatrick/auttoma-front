import Hero from "@/components/Hero/Hero";
import AboutSummary from "@/components/AboutSummary/AboutSummary";
import DynamicServicesSection from "@/components/DynamicServicesSection/DynamicServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection/HowItWorksSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FaqSection from "@/components/FaqSection/FaqSection";
import CtaButtonSection from "@/components/CtaButtonSection/CtaButtonSection"; 
// ProjectsSection removido da importação pois não será usado

export default function Home() {
  return (
    <>
      <Hero />
      <DynamicServicesSection />
      <AboutSummary />
      <WhyChooseUs />
      <HowItWorksSection />
      <CtaButtonSection />
      
      {/* ProjectsSection removido daqui conforme solicitado (retirar planos) */}
      
      <TestimonialsSection />
      <CtaButtonSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
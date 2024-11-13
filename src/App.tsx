import { NavigationHeader } from '@/components/ui/navigation-header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TeamSection } from '@/components/sections/team-section';
import { FAQSection } from '@/components/sections/faq-section';
import { PricingSection } from '@/components/sections/pricing-section';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
        <PricingSection />
      </main>
    </div>
  );
}
import { SESSIONS } from "@/lib/data";
import { RegistrationProvider } from "@/components/registration/RegistrationContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProgramStats } from "@/components/sections/ProgramStats";
import { SessionsSection } from "@/components/session/SessionsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CoachesSection } from "@/components/sections/CoachesSection";
import { LocationSection } from "@/components/sections/LocationSection";

export default function HomePage() {
  return (
    <RegistrationProvider sessions={SESSIONS}>
      <Header />
      <main>
        <Hero />
        <ProgramStats />
        <SessionsSection />
        <PricingSection />
        <CoachesSection />
        <LocationSection />
      </main>
      <Footer />
    </RegistrationProvider>
  );
}

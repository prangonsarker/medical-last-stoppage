import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { RegistrationSection } from "./components/RegistrationSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-accent/30 selection:text-white font-sans overflow-x-hidden relative">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Auto Scrolling Trust Bar */}
      <TrustBar />

      {/* 3. Course Services */}
      <Services />

      {/* 4. Course Gallery */}
      <Gallery />

      {/* 5. Registration */}
      <RegistrationSection />

      {/* 6. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </main>
  );
}

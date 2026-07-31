import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { CourseVideo } from "./components/CourseVideo";
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

      {/* 3. Course Overview Video */}
      <CourseVideo />

      {/* 4. Course Services */}
      <Services />

      {/* 5. Course Gallery */}
      <Gallery />

      {/* 6. Registration */}
      <RegistrationSection />

      {/* 7. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </main>
  );
}

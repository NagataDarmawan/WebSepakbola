"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/Navbar";
import HeroBeritaSection from "@/sections/HeroBeritaSection";
import MatchStandingsSection from "@/sections/MatchStandingsSection";
import RedSectionWrapper from "@/components/layouts/RedSectionWrapper";
import TimSection from "@/sections/TimSection";
import BeritaSection from "@/sections/BeritaSection";
import VideoSection from "@/sections/VideoSection";
import SponsorSection from "@/sections/SponsorSection";
import Footer from "@/components/layouts/Footer";

// Import DisclaimerModal secara dinamis (bebas error SSR / Hydration)
const DisclaimerModal = dynamic(
  () => import("@/components/ui/DisclaimerModal"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroBeritaSection />
      <MatchStandingsSection />

      {/* Konten dengan Latar Belakang Merah Watermark */}
      <RedSectionWrapper>
        <TimSection />
        <BeritaSection maxItems={6} />
        <VideoSection maxItems={9} />
      </RedSectionWrapper>

      {/* SponsorSection Hitam di Bawahnya */}
      <SponsorSection />

      <Footer />

      {/* Pop-up Disclaimer Otomatis */}
      <DisclaimerModal />
    </main>
  );
}
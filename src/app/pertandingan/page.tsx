"use client";

import { useState } from "react";
import { siteConfig } from "@/constants/siteConfig";
import { JADWAL_DATA } from "@/constants/jadwalData";
import { KLASEMEN_RAW_DATA } from "@/constants/klasemenData";
import { SCHEDULE_STANDINGS_PAGE_CONFIG } from "@/constants/halamanPertandinganData";
import { getSortedStandings } from "@/utils/klasemenUtils";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import MatchList from "@/components/jadwal/DaftarJadwal";
import StandingsTable from "@/components/jadwal/DaftarKlasemen";

export default function ScheduleStandingsPage() {
  const [activeTab, setActiveTab] = useState<"jadwal" | "klasemen">("jadwal");
  const [matchFilter, setMatchFilter] = useState<"upcoming" | "completed">(
    "upcoming"
  );

  const userClubName = siteConfig.name || "PERSEKAT TEGAL";
  const standings = getSortedStandings(KLASEMEN_RAW_DATA);
  const { title, subtitle, description, backgroundImage, tabs, tableHeaders } =
    SCHEDULE_STANDINGS_PAGE_CONFIG;

  const filteredMatches = JADWAL_DATA.filter((m) =>
    matchFilter === "completed" ? m.isCompleted : !m.isCompleted
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />

      <main className="pb-20">
        {/* HERO SECTION (Disamakan Presisi dengan Halaman Berita) */}
        <section className="relative w-full h-[340px] md:h-[380px] flex items-center justify-center overflow-hidden bg-black text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-16 flex flex-col items-center">
            {/* Subtitle */}
            <span className="block text-xs md:text-sm font-black uppercase tracking-widest text-primary mb-1">
              {subtitle}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-tight drop-shadow-lg">
              {title}
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-xs md:text-sm text-neutral-300 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* KONTEN UTAMA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          {/* TAB SWITCHER UTAMA */}
          <div className="flex justify-center mb-8 border-b border-white/10">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("jadwal")}
                className={`pb-4 text-sm md:text-base font-black uppercase tracking-wider transition-all relative ${
                  activeTab === "jadwal"
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tabs.scheduleLabel}
              </button>
              <button
                onClick={() => setActiveTab("klasemen")}
                className={`pb-4 text-sm md:text-base font-black uppercase tracking-wider transition-all relative ${
                  activeTab === "klasemen"
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tabs.standingsLabel}
              </button>
            </div>
          </div>

          {/* RENDER KONTEN BERDASARKAN TAB AKTIF */}
          {activeTab === "jadwal" ? (
            <MatchList
              matches={filteredMatches}
              matchFilter={matchFilter}
              onFilterChange={setMatchFilter}
            />
          ) : (
            <StandingsTable
              standings={standings}
              userClubName={userClubName}
              tableHeaders={tableHeaders}
              isCompact={false}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
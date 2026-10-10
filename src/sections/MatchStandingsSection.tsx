'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';
import { JADWAL_DATA } from '@/constants/jadwalData';
import { KLASEMEN_RAW_DATA } from '@/constants/klasemenData';
import { MATCH_STANDING_CONFIG } from '@/constants/matchStandingData';
import { SCHEDULE_STANDINGS_PAGE_CONFIG } from '@/constants/halamanPertandinganData';
import { getSortedStandings, getTopStandingsWithUserTeam } from '@/utils/klasemenUtils';
import { getUpcomingMatch, calculateTimeLeft } from '@/utils/jadwalUtils';
import Button from '@/components/ui/Button';
import StandingsTable from '@/components/jadwal/DaftarKlasemen';

export default function MatchStandingsSection() {
  const nextMatch = getUpcomingMatch(JADWAL_DATA);
  const allStandings = getSortedStandings(KLASEMEN_RAW_DATA);
  const userClubName = siteConfig.name || 'PERSEKAT Tegal';
  const topStandings = getTopStandingsWithUserTeam(allStandings, userClubName, 6);
  const { tableHeaders } = SCHEDULE_STANDINGS_PAGE_CONFIG;

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!nextMatch?.targetDate) return;

    const updateTimer = () => {
      const calculated = calculateTimeLeft(nextMatch.targetDate);
      setTimeLeft(calculated);

      if (
        calculated.days === 0 &&
        calculated.hours === 0 &&
        calculated.minutes === 0 &&
        calculated.seconds === 0
      ) {
        const updatedNextMatch = getUpcomingMatch(JADWAL_DATA);
        if (updatedNextMatch.id !== nextMatch.id) {
          setTimeLeft(calculateTimeLeft(updatedNextMatch.targetDate));
        }
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [nextMatch?.targetDate, nextMatch?.id]);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-black text-white">
      {/* Background Foto Utama */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${MATCH_STANDING_CONFIG.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90" />
      </div>

      {/* Efek Pudar Bagian Bawah Section */}
      <div className="absolute bottom-0 inset-x-0 h-20 md:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* KOLOM KIRI: PERTANDINGAN BERIKUTNYA */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="mb-6 text-center">
              <span className="text-xs md:text-sm font-black uppercase tracking-wider text-white">
                {nextMatch.competition}
              </span>
            </div>

            {/* Tim VS Tim + Logo */}
            <div className="py-4 flex items-center justify-between gap-4">
              <div className="flex flex-col items-center text-center flex-1 space-y-3">
                <img
                  src={nextMatch.homeLogo || siteConfig.logo}
                  alt={nextMatch.homeTeam}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl"
                />
                <span className="font-extrabold text-xs md:text-sm uppercase tracking-wider text-white">
                  {nextMatch.homeTeam}
                </span>
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <span className="text-2xl md:text-4xl font-black not-italic tracking-widest text-primary drop-shadow-md">
                  VS
                </span>
              </div>

              <div className="flex flex-col items-center text-center flex-1 space-y-3">
                <img
                  src={nextMatch.awayLogo || siteConfig.logo}
                  alt={nextMatch.awayTeam}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl"
                />
                <span className="font-black text-xs md:text-sm uppercase tracking-wider text-white">
                  {nextMatch.awayTeam}
                </span>
              </div>
            </div>

            {/* Hitung Mundur & Info Jadwal */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* KOLOM COUNTDOWN */}
              <div className="flex items-center justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-6">
                <div className="flex items-center justify-between w-full gap-2 md:gap-3">
                  <div className="text-center flex-1">
                    <span className="block text-2xl md:text-3xl font-black text-white leading-none">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest mt-1 block">
                      {MATCH_STANDING_CONFIG.countdownUnits.days}
                    </span>
                  </div>
                  
                  <span className="text-neutral-500 font-bold text-lg md:text-xl pb-3">:</span>

                  <div className="text-center flex-1">
                    <span className="block text-2xl md:text-3xl font-black text-white leading-none">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest mt-1 block">
                      {MATCH_STANDING_CONFIG.countdownUnits.hours}
                    </span>
                  </div>

                  <span className="text-neutral-500 font-bold text-lg md:text-xl pb-3">:</span>

                  <div className="text-center flex-1">
                    <span className="block text-2xl md:text-3xl font-black text-white leading-none">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest mt-1 block">
                      {MATCH_STANDING_CONFIG.countdownUnits.minutes}
                    </span>
                  </div>

                  <span className="text-neutral-500 font-bold text-lg md:text-xl pb-3">:</span>

                  <div className="text-center flex-1">
                    <span className="block text-2xl md:text-3xl font-black text-white leading-none">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest mt-1 block">
                      {MATCH_STANDING_CONFIG.countdownUnits.seconds}
                    </span>
                  </div>
                </div>
              </div>

              {/* KOLOM INFO JADWAL */}
              <div className="flex flex-col items-center sm:items-start space-y-1 text-xs text-neutral-300 sm:pl-2">
                <div className="font-bold text-white uppercase tracking-wider text-[11px] md:text-xs">
                  <span>{nextMatch.dateText}</span>
                </div>
                <p className="font-bold text-white text-[11px]">{nextMatch.kickOff}</p>
                <div className="text-white font-bold text-[10px] md:text-[11px]">
                  <span>{nextMatch.venue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: KLASEMEN */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <StandingsTable 
              standings={topStandings} 
              userClubName={userClubName} 
              tableHeaders={tableHeaders} 
              isCompact={true}
            />
          </div>

        </div>

        {/* Button Jadwal & Klasemen Lengkap (Telah Diperbaiki) */}
        <div className="mt-12 flex justify-center px-4">
          <Link href={MATCH_STANDING_CONFIG.scheduleLinkUrl} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto group font-bold uppercase tracking-wider text-white">
              <span className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm whitespace-nowrap w-full text-white">
                <span>LIHAT JADWAL & KLASEMEN</span>
                <ArrowRight className="w-4 h-4 shrink-0 -rotate-45 transition-transform duration-200 group-hover:rotate-0 group-hover:translate-x-1 text-white" />
              </span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
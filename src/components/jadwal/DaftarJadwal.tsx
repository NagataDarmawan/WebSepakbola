'use client';

import { siteConfig } from '@/constants/siteConfig';
import { MatchItem } from '@/constants/jadwalData';
import Button from '@/components/ui/Button';

interface MatchListProps {
  matches: MatchItem[];
  matchFilter: 'upcoming' | 'completed';
  onFilterChange: (filter: 'upcoming' | 'completed') => void;
}

export default function MatchList({ matches, matchFilter, onFilterChange }: MatchListProps) {
  return (
    <div>
      {/* Sub-Filter: Mendatang vs Hasil & Riwayat */}
      <div className="flex justify-center md:justify-end mb-6 gap-3">
        <Button
          onClick={() => onFilterChange('upcoming')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-none ${
            matchFilter === 'upcoming' ? 'bg-primary text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
          }`}
        >
          Mendatang
        </Button>
        <Button
          onClick={() => onFilterChange('completed')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border-none ${
            matchFilter === 'completed' ? 'bg-primary text-white' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
          }`}
        >
          Hasil & Riwayat
        </Button>
      </div>

      {/* List Pertandingan */}
      <div className="divide-y divide-white/10">
        {matches.length === 0 ? (
          <div className="py-12 text-center text-neutral-500 text-sm uppercase tracking-wider font-bold">
            Belum ada data pertandingan.
          </div>
        ) : (
          matches.map((m) => (
            <div key={m.id} className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-1/4 text-center md:text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-primary">{m.competition}</span>
                <span className="block text-xs font-bold text-neutral-400 uppercase mt-1">{m.venue}</span>
              </div>

              <div className="w-full md:w-2/4 flex items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-center justify-end gap-3 flex-1 text-center md:text-right">
                  <span className="font-bold text-xs md:text-sm uppercase tracking-wider text-white order-2 md:order-1">{m.homeTeam}</span>
                  <img src={m.homeLogo || siteConfig.logo} alt={m.homeTeam} className="w-12 h-12 md:w-16 md:h-16 object-contain order-1 md:order-2 drop-shadow-md" />
                </div>

                <div className="px-2 text-center min-w-[70px]">
                  {m.isCompleted ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl md:text-2xl font-black text-white">{m.homeScore ?? 0}</span>
                      <span className="text-neutral-500 font-bold">-</span>
                      <span className="text-xl md:text-2xl font-black text-white">{m.awayScore ?? 0}</span>
                    </div>
                  ) : (
                    <span className="text-xl md:text-2xl font-black tracking-widest text-primary">VS</span>
                  )}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-start gap-3 flex-1 text-center md:text-left">
                  <img src={m.awayLogo || siteConfig.logo} alt={m.awayTeam} className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-md" />
                  <span className="font-bold text-xs md:text-sm uppercase tracking-wider text-white">{m.awayTeam}</span>
                </div>
              </div>

              <div className="w-full md:w-1/4 text-center md:text-right">
                <span className="block text-xs md:text-sm font-bold uppercase tracking-wider text-white">{m.dateText}</span>
                <span className="block text-xs font-bold text-neutral-400 uppercase mt-0.5">{m.kickOff}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
'use client';

import { ComputedClubStanding } from '@/utils/klasemenUtils';

interface StandingsTableProps {
  standings: ComputedClubStanding[];
  userClubName: string;
  tableHeaders: {
    pos: string;
    club: string;
    played: string;
    won: string;
    drawn: string;
    lost: string;
    gf: string;
    ga: string;
    gd: string;
    points: string;
  };
  isCompact?: boolean;
}

export default function StandingsTable({ 
  standings, 
  userClubName, 
  tableHeaders, 
  isCompact = false 
}: StandingsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs md:text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/20 text-primary font-black uppercase tracking-wider bg-primary/10 sm:bg-transparent">
            {/* Header POS dikosongkan teksnya sesuai permintaan */}
            <th className="py-4 px-3 w-12 text-center"></th>
            <th className="py-4 px-3">{tableHeaders.club}</th>
            
            {/* MAIN */}
            <th className="py-4 px-3 text-center w-12">
              <span className="sm:hidden">M</span>
              <span className="hidden sm:inline">{tableHeaders.played}</span>
            </th>
            
            {/* Jika isCompact: M-S-K gabungan. Jika halaman lengkap: M, S, K terpisah */}
            {isCompact ? (
              <th className="py-4 px-3 text-center w-16 whitespace-nowrap">M-S-K</th>
            ) : (
              <>
                <th className="py-4 px-3 text-center w-12">{tableHeaders.won}</th>
                <th className="py-4 px-3 text-center w-12">{tableHeaders.drawn}</th>
                <th className="py-4 px-3 text-center w-12">{tableHeaders.lost}</th>
              </>
            )}

            {/* GM & GK */}
            <th className={`py-4 px-3 text-center w-12 ${isCompact ? 'hidden sm:table-cell' : ''}`}>{tableHeaders.gf}</th>
            <th className={`py-4 px-3 text-center w-12 ${isCompact ? 'hidden sm:table-cell' : ''}`}>{tableHeaders.ga}</th>

            <th className="py-4 px-3 text-center w-16">{tableHeaders.gd}</th>
            <th className="py-4 px-3 text-right font-black w-16">{tableHeaders.points}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {standings.map((row) => {
            const isUserTeam = row.team.toLowerCase().includes(userClubName.toLowerCase());
            const [m, s, k] = (row.wdl || '0-0-0').split('-');

            return (
              <tr 
                key={row.id} 
                className={`transition-colors ${
                  isUserTeam ? 'bg-primary/20 font-bold text-white' : 'hover:bg-white/5 text-neutral-300 font-medium'
                }`}
              >
                {/* Kolom nomor peringkat */}
                <td className="py-4 px-3 text-center relative">
                  {isUserTeam && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
                  <span className={isUserTeam ? 'text-white font-black' : 'text-neutral-400'}>{row.rank}</span>
                </td>
                <td className="py-4 px-3 uppercase tracking-wider">
                  <span className={isUserTeam ? 'text-white font-black' : ''}>{row.team}</span>
                </td>
                <td className="py-4 px-3 text-center">{row.played}</td>

                {/* Ukuran teks M-S-K disamakan dengan kolom angka lainnya (text-xs md:text-sm) */}
                {isCompact ? (
                  <td className="py-4 px-3 text-center text-xs md:text-sm whitespace-nowrap">
                    {row.wdl}
                  </td>
                ) : (
                  <>
                    <td className="py-4 px-3 text-center">{m}</td>
                    <td className="py-4 px-3 text-center">{s}</td>
                    <td className="py-4 px-3 text-center">{k}</td>
                  </>
                )}

                {/* Data GM & GK */}
                <td className={`py-4 px-3 text-center ${isCompact ? 'hidden sm:table-cell' : ''}`}>{row.gf}</td>
                <td className={`py-4 px-3 text-center ${isCompact ? 'hidden sm:table-cell' : ''}`}>{row.ga}</td>

                <td className="py-4 px-3 text-center">{row.gd > 0 ? `+${row.gd}` : row.gd}</td>
                <td className="py-4 px-3 text-right font-black text-white">{row.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
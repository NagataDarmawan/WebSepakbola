import { RawClubData } from '@/constants/klasemenData';

export interface ComputedClubStanding extends RawClubData {
  rank: number;
  played: number; // P (Main)
  gd: number;     // GD (Selisih Gol = GF - GA)
  points: number; // PTS (Win*3 + Draw*1)
  wdl: string;    // String gabungan "W-D-L"
}

export function getSortedStandings(rawClubs: RawClubData[]): ComputedClubStanding[] {
  // 1. Kalkulasi nilai statistik otomatis
  const computed = rawClubs.map((club) => {
    const played = club.win + club.draw + club.loss;
    const points = club.win * 3 + club.draw * 1;
    const gd = club.gf - club.ga;
    const wdl = `${club.win}-${club.draw}-${club.loss}`;

    return {
      ...club,
      played,
      gd,
      points,
      wdl,
      rank: 0,
    };
  });

  // 2. Pengurutan otomatis berdasarkan hirarki standar liga
  computed.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points; // 1. Poin tertinggi
    if (b.gd !== a.gd) return b.gd - a.gd;                 // 2. Selisih gol terbaik
    if (b.gf !== a.gf) return b.gf - a.gf;                 // 3. Gol masuk terbanyak
    return a.team.localeCompare(b.team);                   // 4. Abjad nama klub
  });

  // 3. Berikan nomor ranking 1..N
  return computed.map((club, index) => ({
    ...club,
    rank: index + 1,
  }));
}

/**
 * Memastikan klub pengguna selalu masuk dalam baris klasemen ringkas yang ditampilkan.
 * Mengambil (limit - 1) teratas, lalu slot ke-limit diisi oleh klub pengguna
 * dengan tetap mempertahankan nomor rank asli mereka.
 */
export function getTopStandingsWithUserTeam(
  allStandings: ComputedClubStanding[],
  userTeamName: string,
  limit: number = 6
): ComputedClubStanding[] {
  // Cari data klub pengguna (bisa menggunakan .toLowerCase() agar lebih aman dari perbedaan huruf besar/kecil)
  const userTeamIndex = allStandings.findIndex(
    (row) => row.team.toLowerCase() === userTeamName.toLowerCase()
  );

  // Jika klub pengguna tidak ditemukan atau sudah berada di dalam rentang limit (1..limit)
  if (userTeamIndex === -1 || userTeamIndex < limit) {
    return allStandings.slice(0, limit);
  }

  // Jika klub pengguna berada di luar rentang limit (misal: urutan ke-10)
  const topRows = allStandings.slice(0, limit - 1); // Mengambil 5 teratas (1, 2, 3, 4, 5)
  const userTeamRow = allStandings[userTeamIndex]; // Data klub pengguna beserta rank aslinya (misal: 10)

  return [...topRows, userTeamRow];
}
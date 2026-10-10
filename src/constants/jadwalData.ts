export interface MatchItem {
  id: string;
  competition: string;
  season: string;
  dateText: string;
  kickOff: string;
  venue: string;
  targetDate: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  isUpcoming?: boolean;
  isCompleted?: boolean;
  homeScore?: number;
  awayScore?: number;
}

// 1. KONFIGURASI DEFAULT KLUB
const DEFAULT_CONFIG = {
  competition: 'LIGA 3 NASIONAL 2026/2027',
  season: '2026/2027',
  myTeamName: 'PERSEKAT TEGAL',
  myTeamLogo: '/persekat.jpg',
  homeVenue: 'STADION TRI SANJA, SLAWI',
};

// 2. DICTIONARY LOGO TIM LAWAN
const OPPONENT_LOGOS: Record<string, string> = {
  'PESIK KUNINGAN': 'https://img.a.transfermarkt.technology/wappen/head/47016.png?lm=1789462064',
  'PERSIKOTAS NUSANTARA': 'https://img.a.transfermarkt.technology/wappen/head/95647.png?lm=1788334039',
  'BATAVIA FC JAKARTA': 'https://assets.ileague.id/uploads/images/club/lineup_BATAVIA_FC_1763447936.png',
  'PERSIKOTA KOTA TANGERANG': 'https://assets.ileague.id/uploads/images/logo/93/v/200/17.png',
  'PERSITARA JAKARTA UTARA': 'https://assets.ileague.id/uploads/images/club/lineup_PERSITARA_JAKARTA_UTARA_1763447843.png',
  'SRIWIJAYA FC PALEMBANG': 'https://img.a.transfermarkt.technology/wappen/head/28329.png?lm=1789460716',
  'PEKANBARU FC': 'https://assets.ileague.id/uploads/images/club/lineup_PEKANBARU_FC_1763447871.png',
};

// 3. HELPER UNTUK FORMAT TANGGAL OTOMATIS
function formatDateToIndonesian(dateIso: string): string {
  const date = new Date(dateIso);
  const formatter = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  
  return formatter.format(date).toUpperCase();
}

// 4. HELPER FUNCTION PEMBUAT JADWAL
function createMatch(
  id: string,
  opts: {
    dateIso: string;       // Format: "YYYY-MM-DD"
    time: string;          // Format 24 jam "HH:mm"
    opponentName: string;  // Nama tim lawan
    opponentLogo?: string; // URL logo lawan (opsional)
    isHome: boolean;       // true jika Home, false jika Away
    venue?: string;        // Stadion
    isUpcoming?: boolean;  // Tanda khusus pertandingan mendatang utama
    isCompleted?: boolean; // Set true jika pertandingan sudah selesai
    homeScore?: number;    // Skor tim Kandang
    awayScore?: number;    // Skor tim Tandang
  }
): MatchItem {
  const { 
    dateIso, 
    time, 
    opponentName, 
    opponentLogo = OPPONENT_LOGOS[opponentName] || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Logo_placeholder.svg', 
    isHome, 
    venue, 
    isUpcoming, 
    isCompleted = false,
    homeScore,
    awayScore
  } = opts;

  return {
    id,
    competition: DEFAULT_CONFIG.competition,
    season: DEFAULT_CONFIG.season,
    dateText: formatDateToIndonesian(dateIso),
    kickOff: isCompleted ? 'FULL TIME' : `KICK OFF - ${time.replace(':', '.')} WIB`,
    venue: venue || (isHome ? DEFAULT_CONFIG.homeVenue : ''),
    targetDate: `${dateIso}T${time}:00`,
    homeTeam: isHome ? DEFAULT_CONFIG.myTeamName : opponentName,
    homeLogo: isHome ? DEFAULT_CONFIG.myTeamLogo : opponentLogo,
    awayTeam: isHome ? opponentName : DEFAULT_CONFIG.myTeamName,
    awayLogo: isHome ? opponentLogo : DEFAULT_CONFIG.myTeamLogo,
    isUpcoming,
    isCompleted,
    homeScore,
    awayScore,
  };
}

// 5. DAFTAR JADWAL (8 TIM = 14 MATCHES PERFECTLY BALANCED HOME & AWAY)
export const JADWAL_DATA: MatchItem[] = [
  // ================= PUTARAN PERTAMA =================
  // Pekan 1: vs Pesik Kuningan (Home)
  createMatch('m1', {
    dateIso: '2026-08-15',
    time: '15:30',
    opponentName: 'PESIK KUNINGAN',
    isHome: true,
    isCompleted: true,
    homeScore: 2,
    awayScore: 0,
  }),
  // Pekan 2: vs Persikotas Nusantara (Away)
  createMatch('m2', {
    dateIso: '2026-08-22',
    time: '15:30',
    opponentName: 'PERSIKOTAS NUSANTARA',
    isHome: false,
    venue: 'STADION WIRADADAHAHA, TASIKMALAYA',
    isCompleted: true,
    homeScore: 1,
    awayScore: 1,
  }),
  // Pekan 3: vs Batavia FC Jakarta (Home)
  createMatch('m3', {
    dateIso: '2026-08-29',
    time: '15:30',
    opponentName: 'BATAVIA FC JAKARTA',
    isHome: true,
    isCompleted: true,
    homeScore: 3,
    awayScore: 1,
  }),
  // Pekan 4: vs Persikota Tangerang (Away)
  createMatch('m4', {
    dateIso: '2026-09-05',
    time: '15:30',
    opponentName: 'PERSIKOTA KOTA TANGERANG',
    isHome: false,
    venue: 'STADION BENTENG REBORN, TANGERANG',
    isCompleted: true,
    homeScore: 0,
    awayScore: 1,
  }),
  // Pekan 5: vs Persitara Jakarta Utara (Home)
  createMatch('m5', {
    dateIso: '2026-09-12',
    time: '15:30',
    opponentName: 'PERSITARA JAKARTA UTARA',
    isHome: true,
    isCompleted: true,
    homeScore: 2,
    awayScore: 2,
  }),
  // Pekan 6: vs Sriwijaya FC Palembang (Away)
  createMatch('m6', {
    dateIso: '2026-09-19',
    time: '15:30',
    opponentName: 'SRIWIJAYA FC PALEMBANG',
    isHome: false,
    venue: 'STADION GELORA SRIWIJAYA JAKABARING, PALEMBANG',
    isCompleted: true,
    homeScore: 1,
    awayScore: 2,
  }),
  // Pekan 7: vs Pekanbaru FC (Home)
  createMatch('m7', {
    dateIso: '2026-09-26',
    time: '15:30',
    opponentName: 'PEKANBARU FC',
    isHome: true,
    isUpcoming: true,
  }),

  // ================= PUTARAN KEDUA (KEBALIKAN HOME/AWAY) =================
  // Pekan 8: vs Pesik Kuningan (Away)
  createMatch('m8', {
    dateIso: '2026-10-10',
    time: '15:30',
    opponentName: 'PESIK KUNINGAN',
    isHome: false,
    venue: 'STADION MASHUD WISNUSAPUTRA, KUNINGAN',
  }),
  // Pekan 9: vs Persikotas Nusantara (Home)
  createMatch('m9', {
    dateIso: '2026-10-17',
    time: '15:30',
    opponentName: 'PERSIKOTAS NUSANTARA',
    isHome: true,
  }),
  // Pekan 10: vs Batavia FC Jakarta (Away)
  createMatch('m10', {
    dateIso: '2026-10-24',
    time: '15:30',
    opponentName: 'BATAVIA FC JAKARTA',
    isHome: false,
    venue: 'STADION SOEMANTRI BRODJONEGORO, JAKARTA',
  }),
  // Pekan 11: vs Persikota Tangerang (Home)
  createMatch('m11', {
    dateIso: '2026-10-31',
    time: '15:30',
    opponentName: 'PERSIKOTA KOTA TANGERANG',
    isHome: true,
  }),
  // Pekan 12: vs Persitara Jakarta Utara (Away)
  createMatch('m12', {
    dateIso: '2026-11-07',
    time: '15:30',
    opponentName: 'PERSITARA JAKARTA UTARA',
    isHome: false,
    venue: 'STADION TUGU, JAKARTA UTARA',
  }),
  // Pekan 13: vs Sriwijaya FC Palembang (Home)
  createMatch('m13', {
    dateIso: '2026-11-14',
    time: '15:30',
    opponentName: 'SRIWIJAYA FC PALEMBANG',
    isHome: true,
  }),
  // Pekan 14: vs Pekanbaru FC (Away)
  createMatch('m14', {
    dateIso: '2026-11-21',
    time: '15:30',
    opponentName: 'PEKANBARU FC',
    isHome: false,
    venue: 'STADION UTAMA RIAU, PEKANBARU',
  }),
];
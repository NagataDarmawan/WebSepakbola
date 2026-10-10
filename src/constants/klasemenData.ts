export interface RawClubData {
  id: string;
  team: string;
  win: number;   // W (Jumlah Menang)
  draw: number;  // D (Jumlah Seri)
  loss: number;  // L (Jumlah Kalah)
  gf: number;    // GF (Goals For / Gol Masuk)
  ga: number;    // GA (Goals Against / Gol Kemasukan)
}

export const KLASEMEN_RAW_DATA: RawClubData[] = [
  // 1. Sriwijaya FC Palembang (6 Main: 4 Menang, 1 Seri, 1 Kalah)
  {
    id: '1',
    team: 'SRIWIJAYA FC PALEMBANG',
    win: 4,
    draw: 1,
    loss: 1,
    gf: 11,
    ga: 5,
  },

  // 2. Persekat Tegal (6 Main: 3 Menang, 2 Seri, 1 Kalah)
  {
    id: '2',
    team: 'PERSEKAT TEGAL',
    win: 3,
    draw: 2,
    loss: 1,
    gf: 9,
    ga: 6,
  },

  // 3. Persikota Kota Tangerang (6 Main: 3 Menang, 1 Seri, 2 Kalah)
  {
    id: '3',
    team: 'PERSIKOTA KOTA TANGERANG',
    win: 3,
    draw: 1,
    loss: 2,
    gf: 8,
    ga: 6,
  },

  // 4. Batavia FC Jakarta (6 Main: 2 Menang, 3 Seri, 1 Kalah)
  {
    id: '4',
    team: 'BATAVIA FC JAKARTA',
    win: 2,
    draw: 3,
    loss: 1,
    gf: 7,
    ga: 6,
  },

  // 5. Persikotas Nusantara (6 Main: 2 Menang, 2 Seri, 2 Kalah)
  {
    id: '5',
    team: 'PERSIKOTAS NUSANTARA',
    win: 2,
    draw: 2,
    loss: 2,
    gf: 6,
    ga: 7,
  },

  // 6. Persitara Jakarta Utara (6 Main: 1 Menang, 3 Seri, 2 Kalah)
  {
    id: '6',
    team: 'PERSITARA JAKARTA UTARA',
    win: 1,
    draw: 3,
    loss: 2,
    gf: 5,
    ga: 7,
  },

  // 7. Pesik Kuningan (6 Main: 1 Menang, 2 Seri, 3 Kalah)
  {
    id: '7',
    team: 'PESIK KUNINGAN',
    win: 1,
    draw: 2,
    loss: 3,
    gf: 4,
    ga: 8,
  },

  // 8. Pekanbaru FC (6 Main: 0 Menang, 2 Seri, 4 Kalah)
  {
    id: '8',
    team: 'PEKANBARU FC',
    win: 0,
    draw: 2,
    loss: 4,
    gf: 3,
    ga: 10,
  },
];
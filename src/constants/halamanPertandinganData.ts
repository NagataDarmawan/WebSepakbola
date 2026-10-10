export interface ScheduleStandingsPageConfig {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  tabs: {
    scheduleLabel: string;
    standingsLabel: string;
  };
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
}

export const SCHEDULE_STANDINGS_PAGE_CONFIG: ScheduleStandingsPageConfig = {
  // Config Hero Section
  title: 'JADWAL & KLASEMEN',
  subtitle: 'MUSIM 2026/2027',
  description: 'Pantau terus perjalanan dan statistik pertandingan Persekat Tegal musim ini.',
  backgroundImage: 'https://cdn-jpr.jawapos.com/images/1/2024/09/17/2a468dbf2a53162c125bfa0ba5e7e9bf-1867624565-2917782026.jpg',

  // Label Tab Switcher
  tabs: {
    scheduleLabel: 'Jadwal',
    standingsLabel: 'Klasemen',
  },

  // Header Tabel Klasemen (Bahasa Indonesia)
  tableHeaders: {
    pos: 'POS',
    club: 'KLUB',
    played: 'MAIN',
    won: 'M',
    drawn: 'S',
    lost: 'K',
    gf: 'GM',
    ga: 'GK',
    gd: 'SG',
    points: 'POIN',
  },
};

// Export alias untuk SCHEDULE_STANDINGS_HERO_CONFIG
export const SCHEDULE_STANDINGS_HERO_CONFIG = {
  title: SCHEDULE_STANDINGS_PAGE_CONFIG.title,
  subtitle: SCHEDULE_STANDINGS_PAGE_CONFIG.subtitle,
  description: SCHEDULE_STANDINGS_PAGE_CONFIG.description,
  backgroundImage: SCHEDULE_STANDINGS_PAGE_CONFIG.backgroundImage,
};
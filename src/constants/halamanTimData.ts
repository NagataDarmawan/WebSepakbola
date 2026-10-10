export interface TimPageConfig {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  stats: {
    totalPlayersLabel: string;
    officialStaffLabel: string;
  };
  filterCategories: Array<
    'SEMUA' | 'KIPER' | 'BEK' | 'GELANDANG' | 'PENYERANG' | 'OFFICIAL'
  >;
}

export const TIM_PAGE_CONFIG: TimPageConfig = {
  // Config Hero Section
  subtitle: 'MUSIM LIGA 2026/2027',
  title: 'SKUAD TIM PERSEKAT',
  description: 'Mengenal para pejuang Laskar Ki Gede Sebayu yang siap bertarung membela kebanggaan Tegal.',
  backgroundImage: 'https://cdn-jpr.jawapos.com/images/1/2024/09/17/2a468dbf2a53162c125bfa0ba5e7e9bf-1867624565-2917782026.jpg',

  // Label Statistik
  stats: {
    totalPlayersLabel: 'Total Pemain',
    officialStaffLabel: 'Official Staff',
  },

  // Opsi Filter Kategori
  filterCategories: [
    'SEMUA',
    'KIPER',
    'BEK',
    'GELANDANG',
    'PENYERANG',
    'OFFICIAL',
  ],
};
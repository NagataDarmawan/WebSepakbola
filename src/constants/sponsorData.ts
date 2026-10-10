export interface Sponsor {
  id: string;
  nama: string;
  logoUrl: string;
  tipe: 'sponsored' | 'supported';
  websiteUrl?: string;
}

export const SPONSOR_KLUB: Sponsor[] = [
  // SPONSORED BY (15 Sponsor Komersial)
  {
    id: '1',
    nama: 'Bank Jateng',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '2',
    nama: 'Specs Indonesia',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '3',
    nama: 'KukuBima Energee',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '4',
    nama: 'Indomie',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '5',
    nama: 'Torabika',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '6',
    nama: 'Le Minerale',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '7',
    nama: 'Extra Joss',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '8',
    nama: 'Teh Botol Sosro',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '9',
    nama: 'Telkomsel',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '10',
    nama: 'Gojek',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '11',
    nama: 'Kopi Kapal Api',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '12',
    nama: 'OVO',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '13',
    nama: 'Pocari Sweat',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '14',
    nama: 'Djarum Super',
    logoUrl: '',
    tipe: 'sponsored',
  },
  {
    id: '15',
    nama: 'Kahf',
    logoUrl: '',
    tipe: 'sponsored',
  },

  // SUPPORTED BY (10 Instansi / Media / Dukungan Layanan)
  {
    id: '16',
    nama: 'Pemkab Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '17',
    nama: 'RSUD Dokter Soeselo',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '18',
    nama: 'Info Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '19',
    nama: 'KONI Kabupaten Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '20',
    nama: 'PSSI Askab Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '21',
    nama: 'Disporapar Kab. Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '22',
    nama: 'Polres Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '23',
    nama: 'Radar Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '24',
    nama: 'Stadion Tri Sanja',
    logoUrl: '',
    tipe: 'supported',
  },
  {
    id: '25',
    nama: 'PMI Kabupaten Tegal',
    logoUrl: '',
    tipe: 'supported',
  },
];
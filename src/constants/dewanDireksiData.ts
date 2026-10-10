export interface DireksiItem {
  id: string;
  nama: string;
  jabatan: string;
  fotoUrl: string;
}

export const DEWAN_DIREKSI_LIST: DireksiItem[] = [
  {
    id: '1',
    nama: 'H. Haron Bagas Titingrim',
    jabatan: 'KOMISARIS UTAMA',
    fotoUrl: '/images/direksi/komisaris-utama.jpg',
  },
  {
    id: '2',
    nama: 'Bambang Irawan',
    jabatan: 'KOMISARIS',
    fotoUrl: '/images/direksi/komisaris-1.jpg',
  },
  {
    id: '3',
    nama: 'H. Swatono',
    jabatan: 'DIREKTUR UTAMA',
    fotoUrl: '/images/direksi/direktur-utama.jpg',
  },
  {
    id: '4',
    nama: 'Erhan Sulaeman',
    jabatan: 'DIREKTUR OPERASIONAL',
    fotoUrl: '/images/direksi/direktur-operasional.jpg',
  },
  {
    id: '5',
    nama: 'Taufik Hidayat',
    jabatan: 'DIREKTUR KEUANGAN',
    fotoUrl: '/images/direksi/direktur-keuangan.jpg',
  },
  {
    id: '6',
    nama: 'Ahmad Ridwan',
    jabatan: 'DIREKTUR TEKNIK',
    fotoUrl: '/images/direksi/direktur-teknik.jpg',
  },
];
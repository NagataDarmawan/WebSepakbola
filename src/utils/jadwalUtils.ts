import { MatchItem } from '@/constants/jadwalData';

/**
 * Mengambil 1 pertandingan terdepan yang WAKTUNYA BELUM LEWAT dari waktu saat ini.
 * Jika semua jadwal sudah lewat, akan mengembalikan pertandingan terakhir sebagai fallback.
 */
export function getUpcomingMatch(matches: MatchItem[]): MatchItem {
  const now = new Date().getTime();

  // 1. Cari pertandingan pertama yang targetDate-nya masih di masa depan
  const upcomingMatch = matches.find((match) => {
    const matchTime = new Date(match.targetDate).getTime();
    return matchTime > now; // Harus lebih besar dari waktu sekarang
  });

  // 2. Jika ketemu, kembalikan pertandingan tersebut
  if (upcomingMatch) {
    return upcomingMatch;
  }

  // 3. Fallback: Jika semua pertandingan di list sudah selesai/lewat, ambil pertandingan terakhir
  return matches[matches.length - 1];
}

/**
 * Menghitung sisa waktu secara akurat dari targetDate ISO string.
 */
export function calculateTimeLeft(targetDate: string) {
  const targetTime = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = targetTime - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
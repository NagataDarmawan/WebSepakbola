'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackLink() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-600 hover:text-red-600 transition-colors cursor-pointer bg-transparent border-none p-0"
    >
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      <span>Kembali ke Berita</span>
    </button>
  );
}
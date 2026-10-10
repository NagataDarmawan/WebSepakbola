"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { BERITA_KLUB } from "@/constants/beritaData";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

interface BeritaSectionProps {
  maxItems?: number;
}

export default function BeritaSection({ maxItems = 6 }: BeritaSectionProps) {
  const newsList = BERITA_KLUB.slice(0, maxItems);
  const totalBerita = newsList.length;

  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % totalBerita);
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - 1 + totalBerita) % totalBerita);
  };

  const currentNews = newsList[mobileIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white shrink-0">
          BERITA
        </h2>

        {/* Link di luar, Button di dalam */}
        <Link href="/media/berita">
          <Button variant="black" className="group">
            <span className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm whitespace-nowrap font-black">
              <span>LIHAT SEMUA</span>
              <ArrowRight className="w-4 h-4 shrink-0 -rotate-45 transition-transform duration-200 group-hover:rotate-0 group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>
      </div>

      {/* 1. TAMPILAN MOBILE (Carousel 1 Berita) */}
      <div className="block sm:hidden">
        {currentNews && (
          <article className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col justify-between border border-black/10">
            <div className="relative w-full h-48 overflow-hidden shrink-0">
              <img
                src={currentNews.gambarUrl}
                alt={currentNews.judul}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-[11px] mb-2 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{currentNews.tanggal}</span>
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-neutral-900 line-clamp-2 leading-snug">
                  {currentNews.judul}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed font-medium">
                  {currentNews.ringkasan}
                </p>
              </div>

              <Link
                href={`/berita/${currentNews.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-primary"
              >
                <span>BACA SELENGKAPNYA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        )}

        <div className="mt-6 flex items-center justify-center gap-6">
          <IconButton
            icon={ChevronLeft}
            onClick={handleMobilePrev}
            ariaLabel="Berita Sebelumnya"
            variant="white"
          />
          <span className="text-xs font-black uppercase tracking-widest text-white/80">
            <span className="text-white">{mobileIndex + 1}</span> / {totalBerita}
          </span>
          <IconButton
            icon={ChevronRight}
            onClick={handleMobileNext}
            ariaLabel="Berita Selanjutnya"
            variant="white"
          />
        </div>
      </div>

      {/* 2. TAMPILAN DESKTOP & TABLET (Grid 2/3 Kolom) */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {newsList.map((news) => (
          <article
            key={news.id}
            className="group relative w-full h-[400px] md:h-[420px] rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col justify-between border border-black/10"
          >
            <div className="relative w-full h-48 md:h-52 overflow-hidden shrink-0">
              <img
                src={news.gambarUrl}
                alt={news.judul}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-[11px] md:text-xs mb-2 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{news.tanggal}</span>
                </div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-neutral-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                  {news.judul}
                </h3>
                <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed font-medium">
                  {news.ringkasan}
                </p>
              </div>

              <Link
                href={`/berita/${news.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-primary group-hover:translate-x-1 transition-transform duration-200"
              >
                <span>BACA SELENGKAPNYA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import TypographyWatermark from '@/components/ui/WatermarkBG';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { TIMELINE_SEJARAH, SEJARAH_HIGHLIGHTS, SejarahTimelineItem } from '@/constants/dataSejarah';
import { SEJARAH_PAGE_CONFIG } from '@/constants/halamanSejarahData';

export default function SejarahPage() {
  const { subtitle, title, description, backgroundImage } = SEJARAH_PAGE_CONFIG;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative w-full h-[340px] md:h-[380px] flex items-center justify-center overflow-hidden bg-black text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-16 flex flex-col items-center">
            <span className="block text-xs md:text-sm font-black uppercase tracking-widest text-primary mb-1">
              {subtitle}
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2 leading-tight drop-shadow-lg">
              {title}
            </h1>

            <p className="max-w-2xl mx-auto text-xs md:text-sm text-neutral-300 font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* SECTION UTAMA DENGAN WATERMARK & LATAR MERAH */}
        <section className="relative w-full py-12 md:py-20 bg-primary overflow-hidden text-white -mt-6 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

          <TypographyWatermark />

          <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* HIGHLIGHTS DENGAN GARIS PEMBATAS */}
            <div className="py-6 border-y border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
                {SEJARAH_HIGHLIGHTS.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center text-center space-y-1 ${
                      index !== 0 ? 'pt-4 md:pt-0' : ''
                    }`}
                  >
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-300">
                      {item.label}
                    </span>
                    <p className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-tight">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE RATA KIRI */}
            <div className="space-y-12">
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  REKAM JEJAK SEJARAH
                </h2>
              </div>

              {/* Container Timeline */}
              <div ref={containerRef} className="relative pl-8 sm:pl-12 space-y-12 md:space-y-14">
                
                {/* 1. Garis Dasar Statis */}
                <div className="absolute left-[9px] sm:left-[13px] top-0 bottom-0 w-0.5 bg-white/20" />

                {/* 2. Garis Bergerak Merah */}
                <motion.div
                  style={{ height: lineHeight }}
                  className="absolute left-[9px] sm:left-[13px] top-0 w-0.5 bg-red-600 shadow-[0_0_10px_#dc2626] z-10"
                />

                {/* Item Timeline */}
                {TIMELINE_SEJARAH.map((item: SejarahTimelineItem, index: number) => (
                  <div key={index} className="relative">
                    {/* Lingkaran Titik (Digeser 2px ke Kanan) */}
                    <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-black shadow-lg shadow-primary/50 z-20" />

                    {/* Konten Sejarah */}
                    <div className="space-y-3">
                      {/* Badge Tahun */}
                      <div className="inline-block px-3 py-1 rounded-xl bg-black/50 border border-white/20 text-white font-mono font-black text-xs sm:text-sm">
                        {item.tahun}
                      </div>

                      <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
                        {item.judul}
                      </h3>

                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium max-w-3xl">
                        {item.deskripsi}
                      </p>

                      {/* Foto Dokumentasi */}
                      {item.fotoUrl && (
                        <div className="relative w-full max-w-2xl h-52 sm:h-64 rounded-xl overflow-hidden border border-white/10 mt-4 bg-neutral-900">
                          <ImageWithFallback
                            src={item.fotoUrl}
                            alt={item.judul}
                            fallbackText={`DOKUMENTASI ${item.tahun}`}
                            className="w-full h-full object-cover opacity-90"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
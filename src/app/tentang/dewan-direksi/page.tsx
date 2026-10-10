'use client';

import Image from 'next/image';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import TypographyWatermark from '@/components/ui/WatermarkBG';
import { DEWAN_DIREKSI_LIST, DireksiItem } from '@/constants/dewanDireksiData';
import { DEWAN_DIREKSI_PAGE_CONFIG } from '@/constants/halamanDewanDireksiData';

export default function DewanDireksiPage() {
  const { subtitle, title, description, backgroundImage } = DEWAN_DIREKSI_PAGE_CONFIG;

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

        {/* SECTION GRID DEWAN DIREKSI DENGAN WATERMARK */}
        <section className="relative w-full py-12 md:py-20 bg-primary overflow-hidden text-white -mt-6 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

          <TypographyWatermark />

          <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid List Kartu Direksi (3 Kolom per Baris) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {DEWAN_DIREKSI_LIST.map((person: DireksiItem) => (
                <div
                  key={person.id}
                  className="group relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl border border-white/10"
                >
                  {/* Foto Profil */}
                  <Image
                    src={person.fotoUrl}
                    alt={person.nama}
                    fill
                    className="object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay Gelap di Bagian Bawah untuk Kejelasan Teks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                  {/* Konten Teks Nama & Jabatan (Gaya Sesuai Gambar Referensi) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 flex flex-col justify-end text-left">
                    {/* Garis Aksen Merah */}
                    <div className="w-8 h-1 bg-primary mb-3 rounded-full" />

                    {/* Jabatan */}
                    <span className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-red-500 mb-1">
                      {person.jabatan}
                    </span>

                    {/* Nama Lengkap */}
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
                      {person.nama}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import TypographyWatermark from '@/components/ui/WatermarkBG';
import IconButton from '@/components/ui/IconButton';
import { GALERI_FOTO, GaleriItem } from '@/constants/galeriData';
import { GALERI_PAGE_CONFIG } from '@/constants/halamanGaleriData';

const ITEMS_PER_PAGE = 12;

export default function GaleriPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const totalPages = Math.ceil(GALERI_FOTO.length / ITEMS_PER_PAGE);

  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return GALERI_FOTO.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const { subtitle, title, description, backgroundImage } = GALERI_PAGE_CONFIG;

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

        {/* SECTION GRID GALERI FOTO */}
        <section className="relative w-full py-12 md:py-20 bg-primary overflow-hidden text-white -mt-6 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

          <TypographyWatermark />

          <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid List Foto (Format 3 Kolom: 3x4 = 12 Items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedImages.map((foto: GaleriItem) => (
                <div
                  key={foto.id}
                  onClick={() => setSelectedImage(foto.imageUrl)}
                  className="group relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 cursor-pointer"
                >
                  <Image
                    src={foto.imageUrl}
                    alt={foto.altText || 'Galeri Persekat Tegal'}
                    fill
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Navigasi Pagination dengan IconButton */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-6 z-30">
                <IconButton
                  icon={ChevronLeft}
                  onClick={handlePrevPage}
                  ariaLabel="Halaman Sebelumnya"
                  variant="white"
                  disabled={currentPage === 1}
                />

                <span className="text-xs font-black uppercase tracking-widest text-white/80">
                  <span className="text-white">{currentPage}</span> / {totalPages}
                </span>

                <IconButton
                  icon={ChevronRight}
                  onClick={handleNextPage}
                  ariaLabel="Halaman Selanjutnya"
                  variant="white"
                  disabled={currentPage === totalPages}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox / Preview Fullscreen Foto */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors p-2"
            aria-label="Tutup Preview"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview Foto"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
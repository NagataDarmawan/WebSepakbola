'use client';

import { useState, useMemo } from 'react';
import { Calendar, Clock, Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import TypographyWatermark from '@/components/ui/WatermarkBG';
import SearchInput from '@/components/ui/SearchInput';
import IconButton from '@/components/ui/IconButton';
import VideoModal from '@/components/ui/VideoModal';
import { VIDEO_KLUB, VideoItem } from '@/constants/videoData';
import { VIDEO_PAGE_CONFIG } from '@/constants/halamanVideoData';

const ITEMS_PER_PAGE = 12;

export default function VideoPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    if (!searchQuery.trim()) return VIDEO_KLUB;
    const query = searchQuery.toLowerCase();
    return VIDEO_KLUB.filter((video) =>
      video.judul.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const { subtitle, title, description, backgroundImage } = VIDEO_PAGE_CONFIG;

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

        {/* SECTION LIST VIDEO */}
        <section className="relative w-full py-12 md:py-20 bg-primary overflow-hidden text-white -mt-6 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

          <TypographyWatermark />

          <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="w-full md:w-80 ml-auto mb-8">
              <SearchInput
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari video..."
              />
            </div>

            {/* Grid List Kartu Video (12 Items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {paginatedVideos.map((video) => (
                <article
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col justify-between border border-black/10 cursor-pointer"
                >
                  <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden shrink-0 bg-black">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.judul}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 z-20 bg-black/80 text-white text-[10px] md:text-xs font-black tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md flex items-center gap-1 border border-white/10">
                      <Clock className="w-3 h-3 text-primary" />
                      <span>{video.durasi}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center text-neutral-500 text-[11px] md:text-xs mb-2.5 font-semibold border-b border-neutral-100 pb-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{video.tanggal}</span>
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-neutral-900 group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                        {video.judul}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-black text-primary transition-transform duration-200 group-hover:translate-x-1.5">
                        <span>PUTAR VIDEO</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/80 font-bold uppercase tracking-wider">
                  Tidak ada video ditemukan untuk kata kunci ini.
                </p>
              </div>
            )}

            {/* Navigasi Pagination */}
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

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <Footer />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Calendar, ChevronLeft, ChevronRight, ArrowRight, Clock } from "lucide-react";
import { VIDEO_KLUB, VideoItem } from "@/constants/videoData";
import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/Button";
import VideoModal from "@/components/ui/VideoModal";

interface VideoSectionProps {
  maxItems?: number;
}

export default function VideoSection({ maxItems = 9 }: VideoSectionProps) {
  const videoList = VIDEO_KLUB.slice(0, maxItems);
  const totalBerita = videoList.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Deteksi ukuran layar (1 di mobile, 3 di desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Jalankan sekali saat mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(totalBerita / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleVideos = videoList.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between gap-4 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white shrink-0">
          VIDEO TERBARU
        </h2>

        <Link href="/media/video">
          <Button variant="black" className="group">
            <span className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm whitespace-nowrap font-black">
              <span>LIHAT SEMUA</span>
              <ArrowRight className="w-4 h-4 shrink-0 -rotate-45 text-current" />
            </span>
          </Button>
        </Link>
      </div>

      {/* Grid Card Video (1 kolom di mobile, 3 di desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {visibleVideos.map((video) => (
          <article
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col justify-between border border-black/10 cursor-pointer"
          >
            {/* Thumbnail Video & Play Overlay */}
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

            {/* Detail Konten Video */}
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

      {/* Navigation IconButton */}
      {totalPages > 1 && (
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-6">
          <IconButton
            icon={ChevronLeft}
            onClick={handlePrev}
            ariaLabel="Video Sebelumnya"
            variant="white"
          />

          <span className="text-xs font-black uppercase tracking-widest text-white/80">
            <span className="text-white">{currentIndex + 1}</span> / {totalPages}
          </span>

          <IconButton
            icon={ChevronRight}
            onClick={handleNext}
            ariaLabel="Video Selanjutnya"
            variant="white"
          />
        </div>
      )}

      {/* Pop-up Modal Video */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
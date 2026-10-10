"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BERITA_KLUB } from "@/constants/beritaData";
import { slideVariants, fadeInUp } from "@/animations";
import IconButton from "@/components/ui/IconButton";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";

export default function HeroBeritaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Membatasi 3 berita terbaru untuk slider hero
  const beritaHero = BERITA_KLUB.slice(0, 3);
  const totalBerita = beritaHero.length;
  const beritaUtama = beritaHero[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalBerita);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalBerita) % totalBerita);
  };

  if (!beritaUtama) return null;

  return (
    <section className="relative h-[520px] md:min-h-[100dvh] w-full overflow-hidden bg-black text-white flex flex-col justify-end pb-6 md:pb-12">
      {/* Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.img
          key={beritaUtama.id}
          src={beritaUtama.gambarUrl}
          alt={beritaUtama.judul}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      {/* Konten Teks */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24 pt-32 flex flex-col justify-end flex-grow">
        <motion.div
          key={`content-${beritaUtama.id}`}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-4"
        >
          <div className="w-8 h-1 bg-primary" />
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white">
            {beritaUtama.judul}
          </h1>
          <div>
            <Link href={`/berita/${beritaUtama.slug}`}>
              <Button variant="primary" size="md" className="text-white">
                View Details
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Control Progress Bar */}
      <div className="absolute bottom-4 md:bottom-6 left-6 md:left-12 z-20">
        <ProgressBar
          total={totalBerita}
          currentIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
        />
      </div>

      {/* Control Tombol Panah */}
      <div className="absolute bottom-4 md:bottom-6 right-6 md:right-12 z-20 flex items-center gap-2">
        <IconButton
          icon={ChevronLeft}
          onClick={handlePrev}
          ariaLabel="Previous Slide"
          variant="white"
        />
        <IconButton
          icon={ChevronRight}
          onClick={handleNext}
          ariaLabel="Next Slide"
          variant="white"
        />
      </div>
    </section>
  );
}
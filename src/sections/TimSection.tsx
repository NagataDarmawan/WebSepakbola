"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { TIM_DATA } from "@/constants/timData";
import { cardTransition, getCardAnimation } from "@/animations/timAnimation";
import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/Button";
import BorderBeam from "@/components/ui/BorderBeam";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

export default function TimSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const squadLimit = TIM_DATA.slice(0, 11);
  const totalPemain = squadLimit.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPemain);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPemain) % totalPemain);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between gap-4 mb-10 md:mb-12">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white shrink-0">
          SKUAD
        </h2>

        <Button variant="black">
          <Link
            href="/tim"
            className="group inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm whitespace-nowrap text-current font-black"
          >
            <span>LIHAT SEMUA</span>
            <ArrowRight className="w-4 h-4 shrink-0 -rotate-45 transition-transform duration-200 group-hover:rotate-0 group-hover:translate-x-1 text-current" />
          </Link>
        </Button>
      </div>

      {/* Carousel Area */}
      <div className="relative w-full min-h-[460px] md:min-h-[520px] flex flex-col items-center justify-center overflow-hidden py-4">
        <div className="relative w-full max-w-7xl h-[400px] md:h-[460px] flex items-center justify-center">
          {squadLimit.map((pemain, index) => {
            let offset = index - currentIndex;

            if (offset < -Math.floor(totalPemain / 2)) {
              offset += totalPemain;
            } else if (offset > Math.floor(totalPemain / 2)) {
              offset -= totalPemain;
            }

            if (Math.abs(offset) > 2) return null;

            const isCenter = offset === 0;

            const namaArray = pemain.nama.split(" ");
            const namaDepan = namaArray.length > 1 ? namaArray[0] : "";
            const namaBelakang =
              namaArray.length > 1
                ? namaArray.slice(1).join(" ")
                : pemain.nama;

            return (
              <motion.div
                key={pemain.id}
                className="absolute top-0 w-[250px] sm:w-[280px] md:w-[320px] h-full rounded-2xl overflow-hidden bg-black shadow-2xl cursor-pointer p-[2px]"
                initial={false}
                animate={getCardAnimation(offset, isCenter)}
                transition={cardTransition}
                onClick={() => setCurrentIndex(index)}
              >
                {isCenter && <BorderBeam />}

                <div className="relative w-full h-full rounded-[14px] overflow-hidden border border-white/10 bg-neutral-950 z-10">
                  {/* PENGGUNAAN KOMPONEN IMAGE WITH FALLBACK */}
                  <ImageWithFallback
                    src={pemain.fotoUrl}
                    alt={pemain.nama}
                    fallbackText={`PEMAIN ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute top-3 right-3 z-20 bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <span>{pemain.posisi}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />

                  <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 z-20 flex items-end justify-between gap-2">
                    <div className="flex flex-col justify-end">
                      {namaDepan && (
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
                          {namaDepan}
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                        {namaBelakang}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-3xl md:text-4xl font-black text-primary leading-none drop-shadow-md">
                        #{pemain.nomorPunggung}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tombol Navigasi */}
        <div className="mt-10 flex items-center justify-center gap-6 z-40">
          <IconButton
            icon={ChevronLeft}
            onClick={handlePrev}
            ariaLabel="Pemain Sebelumnya"
            variant="white"
          />

          <span className="text-xs font-black uppercase tracking-widest text-white/80">
            <span className="text-white">{currentIndex + 1}</span> / {totalPemain}
          </span>

          <IconButton
            icon={ChevronRight}
            onClick={handleNext}
            ariaLabel="Pemain Selanjutnya"
            variant="white"
          />
        </div>
      </div>
    </div>
  );
}
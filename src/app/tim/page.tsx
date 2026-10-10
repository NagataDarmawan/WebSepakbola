"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypographyWatermark from "@/components/ui/WatermarkBG";
import BorderBeam from "@/components/ui/BorderBeam";
import SearchInput from "@/components/ui/SearchInput";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { TIM_DATA, OFFICIAL_DATA } from "@/constants/timData";
import { TIM_PAGE_CONFIG } from "@/constants/halamanTimData";

type FilterCategory = (typeof TIM_PAGE_CONFIG.filterCategories)[number];

export default function TimPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("SEMUA");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredList = useMemo(() => {
    let list = [];

    if (activeFilter === "OFFICIAL") {
      list = OFFICIAL_DATA.map((item) => ({ ...item, isOfficial: true }));
    } else {
      const players = TIM_DATA.map((item) => ({ ...item, isOfficial: false }));

      if (activeFilter === "SEMUA") {
        list = players;
      } else {
        list = players.filter((player) => {
          const pos = player.posisi.toUpperCase();
          if (activeFilter === "KIPER")
            return pos.includes("PENJAGA GAWANG") || pos.includes("KIPER");
          if (activeFilter === "BEK") return pos.includes("BEK");
          if (activeFilter === "GELANDANG") return pos.includes("GELANDANG");
          if (activeFilter === "PENYERANG") return pos.includes("PENYERANG");
          return true;
        });
      }
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      list = list.filter((item) => item.nama.toLowerCase().includes(query));
    }

    return list;
  }, [activeFilter, searchQuery]);

  const {
    subtitle,
    title,
    description,
    backgroundImage,
    stats,
    filterCategories,
  } = TIM_PAGE_CONFIG;

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

            <div className="mt-4 flex items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-black text-primary leading-none">
                  {TIM_DATA.length}
                </span>
                <span className="text-[10px] md:text-xs text-neutral-300 font-bold uppercase tracking-wider mt-1 block">
                  {stats.totalPlayersLabel}
                </span>
              </div>

              <div className="h-6 w-[1px] bg-white/20" />

              <div className="text-center">
                <span className="block text-xl md:text-2xl font-black text-primary leading-none">
                  {OFFICIAL_DATA.length}
                </span>
                <span className="text-[10px] md:text-xs text-neutral-300 font-bold uppercase tracking-wider mt-1 block">
                  {stats.officialStaffLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FILTER & GRID SKUAD */}
        <section className="relative w-full py-12 md:py-20 bg-primary overflow-hidden text-white -mt-6 z-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

          <TypographyWatermark />

          <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* KONTROL FILTER (KIRI) DAN SEARCH (KANAN) - SEJAJAR PRESISI */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              {/* Filter Kategori - Sisi Kiri */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {filterCategories.map((category) => {
                  const isActive = activeFilter === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-200 whitespace-nowrap border ${
                        isActive
                          ? "bg-black text-white border-black shadow-lg scale-105"
                          : "bg-black/60 text-white/80 border-white/20 hover:bg-black hover:text-white backdrop-blur-md"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Input Search - Sisi Kanan */}
              <div className="w-full md:w-72 lg:w-80 shrink-0">
                <SearchInput value={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>

            {/* Grid Skuad / Pemain */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              <AnimatePresence>
                {filteredList.map((item, index) => {
                  const namaArray = item.nama.split(" ");
                  const namaDepan = namaArray.length > 1 ? namaArray[0] : "";
                  const namaBelakang =
                    namaArray.length > 1
                      ? namaArray.slice(1).join(" ")
                      : item.nama;

                  const fallbackLabel =
                    "jabatan" in item
                      ? `OFFICIAL ${index + 1}`
                      : `PEMAIN ${index + 1}`;

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      key={item.id}
                      className="group relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-black shadow-2xl p-[2px]"
                    >
                      <BorderBeam />

                      <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-neutral-950 border border-white/10 z-10">
                        <ImageWithFallback
                          src={item.fotoUrl}
                          alt={item.nama}
                          fallbackText={fallbackLabel}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute top-3 right-3 z-20 bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          <span>
                            {"jabatan" in item ? item.jabatan : item.posisi}
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                        <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex items-end justify-between gap-2">
                          <div className="flex flex-col justify-end">
                            {namaDepan && (
                              <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
                                {namaDepan}
                              </span>
                            )}
                            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white leading-tight">
                              {namaBelakang}
                            </h3>
                          </div>

                          {!("jabatan" in item) && "nomorPunggung" in item && (
                            <div className="text-right shrink-0">
                              <span className="text-3xl md:text-4xl font-black text-primary leading-none drop-shadow-md">
                                #{item.nomorPunggung}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredList.length === 0 && (
              <div className="text-center py-20">
                <p className="text-white/80 font-bold uppercase tracking-wider">
                  Tidak ada data ditemukan untuk kata kunci pencarian ini.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
'use client';

import { Store, Clock, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import TypographyWatermark from '@/components/ui/WatermarkBG';
import StoreOrderInfo from '@/components/ui/StoreOrderInfo';
import { STORE_LOCATIONS, OFFICIAL_STORE_INFO } from '@/constants/storeData';
import { STORE_PAGE_CONFIG } from '@/constants/halamanStoreData';
import { InstagramIcon } from '@/components/ui/SocialIcons';

export default function StorePage() {
  const { subtitle, title, description, backgroundImage } = STORE_PAGE_CONFIG;
  const mainStore = STORE_LOCATIONS[0];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION (Tinggi Disamakan h-[340px] md:h-[380px]) */}
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

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* GRID 2 KOLOM: KIRI (INFORMASI STORE FISIK) | KANAN (ONLINE STORE INFO) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              
              {/* KOLOM KIRI: LOKASI & DETAIL STORE FISIK */}
              <div className="lg:col-span-5 bg-black/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 space-y-8 shadow-2xl">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2 relative">
                    {/* Badge ID Store dihapus dari sini */}
                    OFFICIAL STORE FISIK
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Kunjungi toko fisik resmi kami untuk mendapatkan produk merchandise original Persekat.
                  </p>
                </div>

                {/* Detail Informasi Toko */}
                <div className="space-y-5 text-xs sm:text-sm text-neutral-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-white">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">NAMA TOKO</span>
                      <p className="font-semibold text-white">
                        {mainStore.namaStore}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">ALAMAT LENGKAP</span>
                      <p className="font-semibold text-white leading-relaxed">
                        {mainStore.alamat}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">JAM OPERASIONAL</span>
                      <p className="font-semibold text-white">
                        {mainStore.jamOperasional}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider">KONTAK STORE</span>
                      <a href={`tel:${mainStore.phone}`} className="font-semibold text-white hover:underline">
                        {mainStore.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Media Sosial Store */}
                <div className="pt-4 border-t border-white/10">
                  <span className="block text-xs font-black uppercase tracking-widest text-neutral-300 mb-4">
                    INSTAGRAM STORE
                  </span>
                  <a
                    href={OFFICIAL_STORE_INFO.instagramStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all text-xs font-bold"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>@persekat.store</span>
                  </a>
                </div>
              </div>

              {/* KOLOM KANAN: FORM / ONLINE STORE INFO */}
              <div className="lg:col-span-7">
                <StoreOrderInfo />
              </div>

            </div>

            {/* SECTION GOOGLE MAPS LOKASI STORE */}
            <div className="w-full bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>PETA LOKASI STORE</span>
                </h3>
              </div>

              {/* Container Google Maps Embed */}
              <div className="w-full h-[350px] sm:h-[420px] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                <iframe
                  src={mainStore.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Persekat Official Store"
                  className="grayscale filter hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
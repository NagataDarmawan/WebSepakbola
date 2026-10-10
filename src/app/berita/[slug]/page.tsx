import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, ArrowRight, PlayCircle } from 'lucide-react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { BERITA_KLUB } from '@/constants/beritaData';
import { VIDEO_KLUB } from '@/constants/videoData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const berita = BERITA_KLUB.find((item) => item.slug === slug);

  return {
    title: berita ? `${berita.judul} | PERSEKAT TEGAL` : 'Berita Tidak Ditemukan',
    description: berita?.ringkasan || '',
  };
}

export default async function DetailBeritaPage({ params }: PageProps) {
  const { slug } = await params;
  const berita = BERITA_KLUB.find((item) => item.slug === slug);

  if (!berita) notFound();

  const beritaLainnya = BERITA_KLUB.filter((item) => item.slug !== slug).slice(0, 4);
  const videoLainnya = VIDEO_KLUB.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Teks Kembali ke Halaman Daftar Berita */}
          <Link
            href="/media/berita"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Berita</span>
          </Link>

          {/* Grid Layout Utama */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Artikel Utama */}
            <article className="lg:col-span-8 space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                  {berita.judul}
                </h1>

                <div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-500 font-medium pt-2 border-t border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>{berita.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-red-600" />
                    <span>TIM MEDIA PERSEKAT</span>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[260px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                <ImageWithFallback
                  src={berita.gambarUrl}
                  alt={berita.judul}
                  fallbackText="DOKUMENTASI BERITA"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-800 font-normal pt-2">
                {berita.konten?.length ? (
                  berita.konten.map((paragraf, index) => (
                    <p key={index}>{paragraf}</p>
                  ))
                ) : (
                  <p>{berita.ringkasan}</p>
                )}
              </div>
            </article>

            {/* Sidebar Berita Lainnya */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 pt-6 lg:pt-0 border-t lg:border-t-0 border-neutral-200">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <Link
                  href="/media/berita"
                  className="text-lg font-black uppercase tracking-tight text-neutral-900 hover:text-red-600 transition-colors"
                >
                  BERITA LAINNYA
                </Link>
                <Link
                  href="/media/berita"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <span>SEMUA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {beritaLainnya.map((item) => (
                  <Link
                    key={item.id}
                    href={`/berita/${item.slug}`}
                    className="group flex gap-3 p-2.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 transition-all duration-300"
                  >
                    <div className="relative w-24 h-20 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-200">
                      <ImageWithFallback
                        src={item.gambarUrl}
                        alt={item.judul}
                        fallbackText="BERITA"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow min-w-0">
                      <span className="text-[10px] font-mono font-bold text-neutral-400">{item.tanggal}</span>
                      <h3 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                        {item.judul}
                      </h3>
                      <p className="text-[11px] text-neutral-500 line-clamp-1">{item.ringkasan}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>

          </div>

          {/* Section Video Lainnya */}
          <section className="pt-10 border-t-2 border-neutral-100 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900">
                  VIDEO LAINNYA
                </h2>
              </div>
              <Link href="/galeri/video" className="text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
                <span>LIHAT SEMUA VIDEO</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoLainnya.map((video) => (
                <div key={video.id} className="flex flex-col bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 space-y-3">
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      className="w-full h-full"
                      src={video.youtubeUrl.replace('?autoplay=1', '')}
                      title={video.judul}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-4 pt-1 flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-neutral-400">
                      <span>{video.tanggal}</span>
                      {video.durasi && <span className="bg-neutral-200 text-neutral-700 px-2 py-0.5 rounded">{video.durasi}</span>}
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 leading-snug line-clamp-2">{video.judul}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
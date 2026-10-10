'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/constants/siteConfig';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TwitterIcon, TiktokIcon } from '@/components/ui/SocialIcons';
import TypewriterText from '@/components/ui/TypewriterText';

export default function Footer() {
  const { contact, socials, logo, name, description } = siteConfig;

  return (
    <footer className="w-full bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-2">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0 text-left">
          
          {/* Kolom 1: Logo & Deskripsi (Rata Kiri) */}
          <div className="flex-1 flex flex-col items-start w-full space-y-3">
            <Link href="/" className="flex items-center gap-3.5 group">
              {logo && (
                <img
                  src={logo}
                  alt={name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform shrink-0"
                />
              )}
              <span className="font-extrabold text-lg md:text-xl uppercase tracking-wider text-white">
                {name}
              </span>
            </Link>
            <p className="text-xs md:text-sm text-white/80 font-medium max-w-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="w-full h-px md:w-px md:h-36 bg-black/20 my-2 md:my-0 md:mx-6 shrink-0" />

          {/* Kolom 2: Kontak (Rata Kiri) */}
          <div className="flex-1 flex flex-col items-start w-full space-y-3">
            <span className="text-[11px] md:text-xs font-black uppercase tracking-widest text-white/90">
              KONTAK
            </span>
            <div className="space-y-2.5 text-xs md:text-sm text-white/80 font-medium">
              {contact?.email && (
                <div className="flex items-center gap-2.5 justify-start">
                  <Mail className="w-5 h-5 shrink-0 text-white" />
                  <span>{contact.email}</span>
                </div>
              )}
              {contact?.phone && (
                <div className="flex items-center gap-2.5 justify-start">
                  <Phone className="w-5 h-5 shrink-0 text-white" />
                  <span>{contact.phone}</span>
                </div>
              )}
              {contact?.address && (
                <div className="flex items-start gap-2.5 justify-start text-left">
                  <MapPin className="w-5 h-5 shrink-0 text-white mt-0.5" />
                  <span className="max-w-xs leading-snug">{contact.address}</span>
                </div>
              )}
            </div>
          </div>

          <div className="w-full h-px md:w-px md:h-36 bg-black/20 my-2 md:my-0 md:mx-6 shrink-0" />

          {/* Kolom 3: Sosial Media (Di Tengah / Center) */}
          <div className="flex-1 flex flex-col items-center justify-center w-full space-y-3 text-center">
            <span className="text-[11px] md:text-xs font-black uppercase tracking-widest text-white/90">
              SOSIAL MEDIA
            </span>
            <div className="flex items-center justify-center gap-4">
              {socials?.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-black transition-colors p-1">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              )}
              {socials?.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-black transition-colors p-1">
                  <FacebookIcon className="w-5 h-5" />
                </a>
              )}
              {socials?.youtube && (
                <a href={socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-black transition-colors p-1">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              )}
              {socials?.twitter && (
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-black transition-colors p-1">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              )}
              {socials?.tiktok && (
                <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-black transition-colors p-1">
                  <TiktokIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Teks Typewriter Bertumpuk Raksasa di Bawah */}
        <div className="w-full text-center overflow-hidden pt-10 pb-4">
          <TypewriterText
            words={["PERSEKAT TEGAL", "LASKAR KI GEDE SEBAYU"]}
            className="text-[8vw] sm:text-[7vw] md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-white drop-shadow-2xl leading-none select-none justify-center"
          />
        </div>
      </div>

      <div className="bg-black/20 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-white/80">
            © {new Date().getFullYear()} <span className="text-white font-bold">{name}</span>. All Rights Reserved.
          </p>

          {/* Badge Pembuat Website Latar Hitam / Dark Glassmorphic */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs shadow-lg">
            <span className="font-mono text-red-500 font-bold">&lt;/&gt;</span>
            <span className="text-white/90 font-normal">Dibuat Oleh</span>
            <span className="font-bold text-red-500 tracking-wide">Nagata Darmawan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
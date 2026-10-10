"use client";

import { SPONSOR_KLUB, Sponsor } from "@/constants/sponsorData";

export default function SponsorSection() {
  const sponsoredList = SPONSOR_KLUB.filter((s) => s.tipe === "sponsored");
  const supportedList = SPONSOR_KLUB.filter((s) => s.tipe === "supported");

  const renderLogo = (item: Sponsor, index: number, imgHeightClass: string) => {
    const fallbackText = item.tipe === "sponsored" ? `SPONSOR ${index + 1}` : `SUPPORTED ${index + 1}`;

    const LogoContent = item.logoUrl ? (
      <img
        src={item.logoUrl}
        alt={item.nama}
        className={`${imgHeightClass} w-auto object-contain`}
      />
    ) : (
      <span className="text-neutral-400 font-bold text-xs sm:text-sm tracking-wider uppercase select-none">
        {fallbackText}
      </span>
    );

    if (item.websiteUrl) {
      return (
        <a
          key={item.id}
          href={item.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.nama}
          className="inline-flex items-center justify-center p-2"
        >
          {LogoContent}
        </a>
      );
    }

    return (
      <div key={item.id} className="inline-flex items-center justify-center p-2">
        {LogoContent}
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 md:py-20 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        
        {/* SPONSORED BY */}
        {sponsoredList.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white/80">
              SPONSORED BY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 max-w-5xl mx-auto">
              {sponsoredList.map((item, index) => renderLogo(item, index, "h-12 sm:h-16 md:h-20"))}
            </div>
          </div>
        )}

        {/* Divider Tipis */}
        {sponsoredList.length > 0 && supportedList.length > 0 && (
          <div className="w-24 h-px bg-white/10 mx-auto" />
        )}

        {/* SUPPORTED BY */}
        {supportedList.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white/80">
              SUPPORTED BY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
              {supportedList.map((item, index) => renderLogo(item, index, "h-8 sm:h-10 md:h-12"))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
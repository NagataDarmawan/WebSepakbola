"use client";

import TypographyWatermark from "@/components/ui/WatermarkBG";

interface RedSectionWrapperProps {
  children: React.ReactNode;
}

export default function RedSectionWrapper({ children }: RedSectionWrapperProps) {
  return (
    <div className="relative w-full bg-primary text-white overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-primary to-primary pointer-events-none z-0" />

      {/* Watermark BG */}
      <TypographyWatermark />

      {/* Transisi Atas (Hitam ke Merah) */}
      <div className="absolute top-0 inset-x-0 h-20 md:h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      {/* Konten Utama */}
      <div className="relative z-20 space-y-16 md:space-y-24">
        {children}
      </div>

      {/* Transisi Bawah Mulus (Merah Pudar ke Hitam Menyatu dengan Sponsor) */}
      <div className="absolute bottom-0 inset-x-0 h-32 md:h-48 bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none z-10" />
    </div>
  );
}
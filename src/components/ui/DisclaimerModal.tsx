"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(10);

  useEffect(() => {
    try {
      const hasSeenDisclaimer = sessionStorage.getItem("persekat_disclaimer_seen");
      if (!hasSeenDisclaimer) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  // Timer hitung mundur 20 detik
  useEffect(() => {
    if (!isOpen || countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, countdown]);

  const handleClose = () => {
    if (countdown > 0) return;

    try {
      sessionStorage.setItem("persekat_disclaimer_seen", "true");
    } catch {
      // Abaikan jika sessionStorage tidak dapat diakses
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-white p-6 sm:p-8 space-y-6">
        
        {/* Angka Hitung Mundur (Hanya Tampil Saat Timer Berjalan) */}
        {countdown > 0 && (
          <span className="absolute top-4 right-4 text-neutral-400 font-mono text-sm sm:text-base font-extrabold p-1 select-none">
            {countdown}s
          </span>
        )}

        {/* Header & Icon Peringatan Besar + Kedap-Kedip */}
        <div className="flex flex-col items-center text-center space-y-2">
          <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-red-600 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />

          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-red-600 animate-pulse pt-2">
            PERINGATAN!!!
          </h3>
        </div>

        {/* Isi Teks Pernyataan */}
        <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed text-center sm:text-left bg-black/40 p-4 rounded-xl border border-white/5">
          <p>
            Website ini <strong className="text-red-400 font-bold">bukan website resmi PERSEKAT TEGAL</strong> dan <strong className="text-white font-bold">tidak berafiliasi secara resmi dengan klub</strong>.
          </p>
          <p>
            Website ini merupakan proyek <strong className="text-white font-bold">Concept Design dan Portofolio Web Development</strong> yang dibuat secara independen untuk keperluan eksplorasi desain antarmuka (UI/UX) dan demonstrasi kemampuan pengembangan web.
          </p>
          <p className="text-[11px] text-neutral-400 italic">
            *Seluruh nama, logo, konten, dan identitas visual yang digunakan merupakan hak milik PERSEKAT TEGAL dan digunakan dalam proyek ini semata-mata untuk tujuan demonstrasi dan pembelajaran.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={handleClose}
            disabled={countdown > 0}
            variant="black"
            className={`w-full font-black py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
              countdown > 0
                ? "bg-neutral-800 text-neutral-500 cursor-not-allowed opacity-60 border border-neutral-700"
                : "bg-primary hover:bg-red-700 text-white shadow-lg shadow-primary/25"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>
              {countdown > 0
                ? `TUNGGU (${countdown}S)`
                : "SAYA MENGERTI & LANJUTKAN"}
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
}
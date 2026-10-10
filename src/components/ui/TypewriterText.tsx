"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export default function TypewriterText({
  words = ["PERSEKAT TEGAL", "LASKAR KI GEDE SEBAYU"],
  typingSpeed = 120,
  deletingSpeed = 60,
  delayBetweenWords = 1500,
  className = "",
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Teks khusus mobile (2 baris bertumpuk) vs desktop (1 baris)
  const mobileWords = ["PERSEKAT\nTEGAL", "LASKAR KI\nGEDE SEBAYU"];
  const activeWords = isMobile ? mobileWords : words;

  useEffect(() => {
    const targetWord = activeWords[wordIndex % activeWords.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Proses Mengetik (Menambah Karakter)
        setCurrentText(targetWord.substring(0, currentText.length + 1));

        // Jika teks sudah selesai diketik penuh
        if (currentText === targetWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Proses Menghapus (Mengecilkan Karakter)
        setCurrentText(targetWord.substring(0, currentText.length - 1));

        // Jika teks sudah habis terhapus
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % activeWords.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, activeWords, typingSpeed, deletingSpeed, delayBetweenWords]);

  // Memecah baris jika ada newline (\n) khusus mobile
  const lines = currentText.split("\n");

  return (
    <span
      /* Kunci tinggi presisi: h-[2.2em] untuk mobile (2 baris) & h-[1.1em] untuk desktop (1 baris) */
      className={`inline-flex flex-col items-center justify-center text-white leading-none ${
        isMobile ? "h-[2.2em]" : "h-[1.1em]"
      } ${className}`}
    >
      {lines.map((line, index) => {
        const isLastLine = index === lines.length - 1;
        return (
          <span key={index} className="inline-flex items-center h-[1em] relative">
            {/* Karakter spasi tidak kasat mata (nbsp) dipasang agar tinggi baris tidak runtuh saat string kosong */}
            <span>{line || "\u00A0"}</span>
            
            {/* Kursor berkedip di ujung kata/baris terakhir */}
            {isLastLine && (
              <span className="ml-[0.1em] inline-block w-[0.08em] h-[0.85em] bg-white animate-pulse shrink-0" />
            )}
          </span>
        );
      })}
    </span>
  );
}
'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src?: string | null;
  fallbackText?: string;
  useNextImage?: boolean; // Pilihan pakai Next Image atau <img> biasa
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackText = 'NO IMAGE',
  useNextImage = false,
  className = '',
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  // Jika URL kosong/null atau terjadi error saat load gambar
  const isFallback = !src || error;

  if (isFallback) {
    return (
      <div
        className={`w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <ImageOff className="w-8 h-8 text-neutral-600 mb-2 shrink-0" />
        <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-neutral-400 line-clamp-2">
          {fallbackText}
        </span>
      </div>
    );
  }

  if (useNextImage) {
    return (
      <Image
        src={src}
        alt={alt || fallbackText}
        className={className}
        onError={() => setError(true)}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || fallbackText}
      className={className}
      onError={() => setError(true)}
    />
  );
}
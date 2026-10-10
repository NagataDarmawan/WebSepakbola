'use client';

export default function TypographyWatermark() {
  const baseTexts = ['PERSEKAT TEGAL', 'LASKAR KI GEDE SEBAYU'];

  // 80 baris agar menutupi seluruh layar HP dari paling atas hingga bawah
  const lines = Array.from({ length: 80 }, (_, index) => baseTexts[index % baseTexts.length]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vh] flex flex-col justify-center gap-2 sm:gap-4 md:gap-6 opacity-15 -rotate-6">
        {lines.map((text, index) => (
          <div
            key={index}
            className={`whitespace-nowrap flex items-center gap-3 sm:gap-6 ${
              index % 2 === 0 ? '-translate-x-12 sm:-translate-x-16' : 'translate-x-12 sm:translate-x-16'
            }`}
          >
            <span className="text-base sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-none shrink-0">
              {text} • {text} • {text} • {text} • {text} • {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
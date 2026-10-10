'use client';

export default function TypographyWatermark() {
  const baseTexts = ['PERSEKAT TEGAL', 'LASKAR KI GEDE SEBAYU'];

  // 120 baris untuk menjamin coverage penuh dari atas sampai bawah
  const lines = Array.from({ length: 120 }, (_, index) => baseTexts[index % baseTexts.length]);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] flex flex-col justify-center gap-4 opacity-25 -rotate-6 origin-center">
        {lines.map((text, index) => (
          <div
            key={index}
            className={`whitespace-nowrap flex items-center gap-6 ${
              index % 2 === 0 ? '-translate-x-16 sm:-translate-x-24' : 'translate-x-16 sm:translate-x-24'
            }`}
          >
            <span className="text-[80px] font-black uppercase tracking-tighter text-black leading-none shrink-0">
              {text} • {text} • {text} • {text} • {text} • {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
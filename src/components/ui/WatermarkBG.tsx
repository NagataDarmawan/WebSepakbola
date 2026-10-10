'use client';

export default function TypographyWatermark() {
  const lines = [
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    'PERSEKAT TEGAL',
    'LASKAR KI GEDE SEBAYU',
    
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex flex-col justify-center gap-4 md:gap-6 opacity-15 -rotate-6 scale-125">
      {lines.map((text, index) => (
        <div
          key={index}
          className={`whitespace-nowrap flex items-center gap-6 ${
            index % 2 === 0 ? 'justify-start -translate-x-16' : 'justify-end translate-x-16'
          }`}
        >
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            {text} {text} {text}
          </span>
        </div>
      ))}
    </div>
  );
}
'use client';

export default function TypographyWatermark() {
  // Ukuran font diperbesar ke 64px dengan lebar kanvas 1650px & tinggi 230px agar teks ekstra besar, tebal, dan tanpa potongan
  const svgPattern = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1650" height="230" viewBox="0 0 1650 230">
      <style>
        .text { font-family: system-ui, -apple-system, sans-serif; font-weight: 900; font-size: 100px; fill: black; text-transform: uppercase; letter-spacing: -1px; }
      </style>
      <text x="0" y="70" dominant-baseline="central" class="text">PERSEKAT TEGAL LASKAR KI GEDE SEBAYU </text>
      <text x="-350" y="170" dominant-baseline="central" class="text">LASKAR KI GEDE SEBAYU PERSEKAT TEGAL PERSEKAT TEGAL </text>
    </svg>
  `);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-15">
      <div 
        className="w-[300%] h-[300%] -translate-x-1/3 -translate-y-1/3 -rotate-6"
        style={{
          backgroundImage: `url("data:image/svg+xml,${svgPattern}")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
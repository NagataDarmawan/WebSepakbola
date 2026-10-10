interface ProgressBarProps {
  total: number;
  currentIndex: number;
  onSelect?: (index: number) => void;
}

export default function ProgressBar({ total, currentIndex, onSelect }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect?.(index)}
          className={`h-1 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'w-8 bg-primary' : 'w-4 bg-white/40 hover:bg-white/70'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
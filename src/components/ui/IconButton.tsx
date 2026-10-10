import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  ariaLabel: string;
  variant?: 'red' | 'white';
  disabled?: boolean;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  onClick,
  ariaLabel,
  variant = 'red',
  disabled = false,
  className = '',
}: IconButtonProps) {
  const variantClasses = {
    // Versi 1: Hover latar Merah (Primary), ikon Hitam
    red: 'bg-black/80 hover:bg-primary text-white hover:text-black hover:border-primary disabled:bg-primary disabled:text-white/40 disabled:border-primary/40 disabled:cursor-not-allowed',
    // Versi 2: Hover latar Putih, ikon Merah (Primary)
    white: 'bg-black/80 hover:bg-white text-white hover:text-primary hover:border-white disabled:bg-primary disabled:text-white/40 disabled:border-primary/40 disabled:cursor-not-allowed',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`p-3 rounded-md backdrop-blur-md transition-colors border border-white/20 ${variantClasses[variant]} ${className}`}
    >
      <Icon className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'black' | 'red';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantClasses = {
    primary: 'bg-primary text-black hover:opacity-80 font-bold',
    secondary: 'bg-black text-white hover:bg-neutral-900 border border-white/20 font-medium',
    outline: 'bg-transparent text-white border-2 border-primary hover:bg-primary hover:text-black font-semibold',
    black: 'bg-black text-white hover:bg-white hover:text-primary font-bold border border-white/20 hover:border-white transition-colors',
    red: 'bg-primary text-white hover:bg-neutral-900 font-bold border border-primary hover:border-white/20 transition-colors',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-md transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
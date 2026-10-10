'use client';

import { Search, X } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Cari nama pemain atau official...',
}: SearchInputProps) {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-neutral-400 pointer-events-none" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-2.5 bg-black/60 border border-white/20 rounded-xl text-xs md:text-sm text-white placeholder-neutral-400 font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
        />

        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3 p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Hapus pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
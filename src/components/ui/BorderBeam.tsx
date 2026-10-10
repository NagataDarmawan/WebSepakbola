'use client';

export default function BorderBeam() {
  return (
    <div className="absolute inset-[-100%] animate-[spin_3.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_180deg,var(--color-primary,#ef4444)_360deg)] pointer-events-none" />
  );
}
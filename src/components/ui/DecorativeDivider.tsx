import React from 'react';

type DividerProps = {
  className?: string;
  type?: string; // Kept for compatibility if passed
};

export default function DecorativeDivider({ className = '' }: DividerProps) {
  return (
    <div className={`w-full flex justify-center items-center py-12 ${className}`}>
      <div className="h-[2px] w-32 max-w-[30vw]" style={{ background: "linear-gradient(90deg, transparent, #d4af37)" }}></div>
      <div className="flex justify-center items-center gap-4 px-4 text-3xl" style={{ color: "#d4af37" }}>
        <span>✦</span>
        <span className="text-4xl translate-y-[-2px]">🪷</span>
        <span>✦</span>
      </div>
      <div className="h-[2px] w-32 max-w-[30vw]" style={{ background: "linear-gradient(270deg, transparent, #d4af37)" }}></div>
    </div>
  );
}

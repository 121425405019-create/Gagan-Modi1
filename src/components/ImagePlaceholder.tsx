import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Layers, Sliders, Layout } from 'lucide-react';

interface PortfolioImagePlaceholderProps {
  src?: string;
  alt?: string;
  label: string;
  type?: 'portrait' | 'brand' | 'digital' | 'presentation' | 'generic';
  aspectRatio?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<PortfolioImagePlaceholderProps> = ({
  src,
  alt = "Portfolio asset placeholder",
  label,
  type = 'generic',
  aspectRatio = 'aspect-[4/3]',
  className = '',
}) => {
  const [imageError, setImageError] = useState(!src);
  const [imageLoaded, setImageLoaded] = useState(false);

  // If a real image src was provided and hasn't failed, attempt to render it
  if (src && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-200 dark:bg-stone-800 animate-pulse">
            <span className="text-xs font-mono tracking-wider text-stone-500">{label}</span>
          </div>
        )}
      </div>
    );
  }

  // Render sophisticated editorial placeholder composition
  return (
    <div
      className={`relative group overflow-hidden border border-stone-200/80 dark:border-stone-800 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200/50 dark:from-stone-900 dark:via-stone-950 dark:to-stone-900/60 p-6 flex flex-col justify-between ${aspectRatio} ${className}`}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative Geometric Elements based on Type */}
      {type === 'portrait' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-stone-300/50 dark:border-stone-700/50 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-dashed border-stone-300 dark:border-stone-700 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-stone-200/60 dark:bg-stone-800/80 backdrop-blur-xs flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#c95d3b] animate-ping opacity-75" />
              </div>
            </div>
          </div>
          {/* Subtle editorial framing brackets */}
          <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-stone-400 dark:border-stone-600" />
          <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-stone-400 dark:border-stone-600" />
          <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-stone-400 dark:border-stone-600" />
          <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-stone-400 dark:border-stone-600" />
        </div>
      )}

      {type === 'brand' && (
        <div className="absolute inset-0 p-8 flex flex-col justify-center gap-3 pointer-events-none opacity-80">
          <div className="flex gap-2">
            <div className="h-10 w-24 bg-stone-300/50 dark:bg-stone-800 rounded-xs border border-stone-300 dark:border-stone-700" />
            <div className="h-10 w-12 bg-[#c95d3b]/20 dark:bg-[#c95d3b]/30 rounded-xs border border-[#c95d3b]/40" />
            <div className="h-10 flex-1 bg-stone-200 dark:bg-stone-800/60 rounded-xs" />
          </div>
          <div className="h-20 w-full bg-stone-200/70 dark:bg-stone-800/40 rounded-xs border border-dashed border-stone-300 dark:border-stone-700 flex items-center px-4">
            <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500 tracking-wider uppercase">Design Token Architecture • Grid 8pt</span>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-stone-300/40 dark:bg-stone-800 rounded-xs" />
            <div className="h-6 w-20 bg-stone-300/40 dark:bg-stone-800 rounded-xs" />
            <div className="h-6 w-28 bg-stone-300/40 dark:bg-stone-800 rounded-xs" />
          </div>
        </div>
      )}

      {type === 'digital' && (
        <div className="absolute inset-0 p-8 flex flex-col justify-center pointer-events-none opacity-80">
          {/* Wireframe Mockup UI */}
          <div className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-md shadow-xs p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700" />
              </div>
              <div className="h-2 w-20 bg-stone-200 dark:bg-stone-800 rounded-xs" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 bg-[#c95d3b]/10 dark:bg-[#c95d3b]/20 border border-[#c95d3b]/30 rounded-xs p-2 flex flex-col justify-between">
                <div className="w-5 h-1.5 bg-[#c95d3b] rounded-full" />
                <div className="w-8 h-1 bg-stone-300 dark:bg-stone-700 rounded-full" />
              </div>
              <div className="h-14 bg-stone-100 dark:bg-stone-800 rounded-xs p-2 flex flex-col justify-between">
                <div className="w-5 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full" />
                <div className="w-10 h-1 bg-stone-300 dark:bg-stone-700 rounded-full" />
              </div>
              <div className="h-14 bg-stone-100 dark:bg-stone-800 rounded-xs p-2 flex flex-col justify-between">
                <div className="w-5 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full" />
                <div className="w-7 h-1 bg-stone-300 dark:bg-stone-700 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'presentation' && (
        <div className="absolute inset-0 p-8 flex flex-col justify-center pointer-events-none opacity-80">
          <div className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-md p-4 space-y-3">
            <div className="h-2 w-24 bg-[#c95d3b] rounded-full" />
            <div className="h-4 w-44 bg-stone-800 dark:bg-stone-200 rounded-xs" />
            <div className="h-1.5 w-full bg-stone-200 dark:bg-stone-800 rounded-full" />
            <div className="flex items-end gap-2 pt-2 h-14 border-t border-stone-200 dark:border-stone-800">
              <div className="w-1/4 h-[40%] bg-stone-300 dark:bg-stone-700 rounded-t-xs" />
              <div className="w-1/4 h-[65%] bg-stone-400 dark:bg-stone-600 rounded-t-xs" />
              <div className="w-1/4 h-[95%] bg-[#c95d3b] rounded-t-xs" />
              <div className="w-1/4 h-[55%] bg-stone-300 dark:bg-stone-700 rounded-t-xs" />
            </div>
          </div>
        </div>
      )}

      {/* Top Header info */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-wider text-stone-400 dark:text-stone-500">
        <span className="flex items-center gap-1.5">
          {type === 'portrait' && <Sparkles className="w-3.5 h-3.5 text-[#c95d3b]" />}
          {type === 'brand' && <Layers className="w-3.5 h-3.5 text-[#c95d3b]" />}
          {type === 'digital' && <Layout className="w-3.5 h-3.5 text-[#c95d3b]" />}
          {type === 'presentation' && <Sliders className="w-3.5 h-3.5 text-[#c95d3b]" />}
          {type === 'generic' && <ImageIcon className="w-3.5 h-3.5 text-[#c95d3b]" />}
          <span>EDITORIAL ASSET</span>
        </span>
        <span className="uppercase">PLACEHOLDER</span>
      </div>

      {/* Center Label Badge */}
      <div className="relative z-10 self-center my-auto">
        <div className="px-4 py-2 bg-stone-900/90 text-stone-100 dark:bg-stone-100/95 dark:text-stone-950 rounded-sm shadow-sm backdrop-blur-xs font-mono text-xs tracking-wider uppercase flex items-center gap-2 border border-stone-700/50 dark:border-stone-300/50">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c95d3b]" />
          <span>{label}</span>
        </div>
      </div>

      {/* Bottom Footer info */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-400 dark:text-stone-500 pt-2 border-t border-stone-200/60 dark:border-stone-800/60">
        <span>EDIT IN /src/data/portfolio.ts</span>
        <span>REPLACE VIA /public/images/</span>
      </div>
    </div>
  );
};

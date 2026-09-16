'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log client error safely in console for diagnostics
    if (process.env.NODE_ENV !== 'production') {
      console.error('Unhandled route error caught by error.tsx boundary:', error);
    }
  }, [error]);

  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-4 py-20"
      role="alert"
      aria-live="assertive"
    >
      <div className="max-w-md w-full text-center">
        {/* Subtle Icon Container */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-gold-400" />
        </div>

        <p className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-2">
          Notice
        </p>

        <h1 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
          Something Went Wrong
        </h1>

        <p className="text-charcoal-300 text-sm leading-relaxed mb-8">
          An unexpected error occurred while loading this page. Our team has been notified. Please try reloading or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto btn-gold text-xs rounded-full py-3 px-6 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto btn-outline-gold text-xs rounded-full py-3 px-6 flex items-center justify-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Copy, ArrowRight } from 'lucide-react';

interface RandomizerOutputProps {
  output: string[];
  copied: boolean;
  onCopy: () => void;
}

export function RandomizerOutput({ output, copied, onCopy }: RandomizerOutputProps) {
  if (output.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Randomized Result
        </h2>
        <button
          onClick={onCopy}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300"
        >
          {copied ? 'Copied!' : 'Copy'}
          <Copy className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2">
        {output.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ArrowRight className="w-4 h-4 text-indigo-600" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
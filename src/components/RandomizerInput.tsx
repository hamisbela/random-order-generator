import React from 'react';
import { Shuffle } from 'lucide-react';

interface RandomizerInputProps {
  input: string;
  setInput: (value: string) => void;
  onRandomize: () => void;
  placeholder: string;
}

export function RandomizerInput({ input, setInput, onRandomize, placeholder }: RandomizerInputProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={onRandomize}
          disabled={!input.trim()}
          className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium 
                   hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <Shuffle className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
          Randomize
        </button>
      </div>
    </div>
  );
}
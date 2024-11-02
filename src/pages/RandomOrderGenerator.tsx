import React, { useState } from 'react';
import { Header } from '../components/Header';
import { RandomizerInput } from '../components/RandomizerInput';
import { RandomizerOutput } from '../components/RandomizerOutput';
import { Navigation } from '../components/Navigation';
import { SeoContent } from '../components/SeoContent';

export function RandomOrderGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const randomizeOrder = () => {
    const items = input
      .split(/[,\n]/)
      .map(item => item.trim())
      .filter(item => item.length > 0);

    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setOutput(shuffled);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Header 
          title="Random Order Generator"
          description="Enter items separated by commas or new lines"
        />
        <RandomizerInput 
          input={input}
          setInput={setInput}
          onRandomize={randomizeOrder}
          placeholder="Enter items here...&#10;Example:&#10;Item 1&#10;Item 2&#10;Item 3"
        />
        <RandomizerOutput 
          output={output}
          copied={copied}
          onCopy={copyToClipboard}
        />
        <SeoContent />
      </div>
    </div>
  );
}
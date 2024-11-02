import React, { useState } from 'react';
import { Header } from '../components/Header';
import { RandomizerInput } from '../components/RandomizerInput';
import { RandomizerOutput } from '../components/RandomizerOutput';
import { Navigation } from '../components/Navigation';

export function NumberGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const randomizeOrder = () => {
    const numbers = input
      .split(/[,\n]/)
      .map(num => num.trim())
      .filter(num => num.length > 0 && !isNaN(Number(num)));

    const shuffled = [...numbers];
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
          title="Random Number Order Generator"
          description="Enter numbers separated by commas or new lines"
        />
        <RandomizerInput 
          input={input}
          setInput={setInput}
          onRandomize={randomizeOrder}
          placeholder="Enter numbers here...&#10;Example:&#10;1&#10;2&#10;3&#10;4&#10;5"
        />
        <RandomizerOutput 
          output={output}
          copied={copied}
          onCopy={copyToClipboard}
        />
        <div className="mt-16 prose prose-indigo">
          <h2>How to Use the Number Order Generator</h2>
          <p>
            Perfect for randomizing numerical sequences, lottery numbers, or any situation where you need
            to shuffle a set of numbers. Simply enter your numbers and get an instant random order.
          </p>
          
          <h2>Common Number Randomization Uses</h2>
          <ul>
            <li>Lottery number generation</li>
            <li>Random sequence creation</li>
            <li>Statistical sampling</li>
            <li>Game number assignments</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
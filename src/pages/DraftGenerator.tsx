import React, { useState } from 'react';
import { Header } from '../components/Header';
import { RandomizerInput } from '../components/RandomizerInput';
import { RandomizerOutput } from '../components/RandomizerOutput';
import { Navigation } from '../components/Navigation';

export function DraftGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const randomizeOrder = () => {
    const participants = input
      .split(/[,\n]/)
      .map(name => name.trim())
      .filter(name => name.length > 0);

    const shuffled = [...participants];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setOutput(shuffled.map((name, index) => `${index + 1}. ${name}`));
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
          title="Random Draft Order Generator"
          description="Enter participants separated by commas or new lines"
        />
        <RandomizerInput 
          input={input}
          setInput={setInput}
          onRandomize={randomizeOrder}
          placeholder="Enter participants here...&#10;Example:&#10;Team Alpha&#10;Team Beta&#10;Team Gamma"
        />
        <RandomizerOutput 
          output={output}
          copied={copied}
          onCopy={copyToClipboard}
        />
        <div className="mt-16 prose prose-indigo">
          <h2>How to Use the Draft Order Generator</h2>
          <p>
            Perfect for fantasy sports drafts, team selections, or any scenario where you need to establish
            a fair picking order. Enter all participants and get an instant, randomized draft order.
          </p>
          
          <h2>Popular Draft Order Applications</h2>
          <ul>
            <li>Fantasy sports leagues</li>
            <li>Tournament seeding</li>
            <li>Team selection order</li>
            <li>Resource allocation order</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
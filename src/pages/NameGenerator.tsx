import React, { useState } from 'react';
import { Header } from '../components/Header';
import { RandomizerInput } from '../components/RandomizerInput';
import { RandomizerOutput } from '../components/RandomizerOutput';
import { Navigation } from '../components/Navigation';

export function NameGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const randomizeOrder = () => {
    const names = input
      .split(/[,\n]/)
      .map(name => name.trim())
      .filter(name => name.length > 0);

    const shuffled = [...names];
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
          title="Random Name Order Generator"
          description="Enter names separated by commas or new lines"
        />
        <RandomizerInput 
          input={input}
          setInput={setInput}
          onRandomize={randomizeOrder}
          placeholder="Enter names here...&#10;Example:&#10;John Smith&#10;Jane Doe&#10;Alex Johnson"
        />
        <RandomizerOutput 
          output={output}
          copied={copied}
          onCopy={copyToClipboard}
        />
        <div className="mt-16 prose prose-indigo">
          <h2>How to Use the Random Name Order Generator</h2>
          <p>
            Perfect for organizing class presentations, team assignments, or any situation where you need
            to randomize a list of names. Simply enter the names, click randomize, and get your random order instantly.
          </p>
          
          <h2>Common Uses for Name Randomization</h2>
          <ul>
            <li>Selecting presentation order for students</li>
            <li>Creating random seating arrangements</li>
            <li>Organizing team member rotations</li>
            <li>Fair selection processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
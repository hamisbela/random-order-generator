import React from 'react';

export function SeoContent() {
  return (
    <div className="mt-16 prose prose-indigo max-w-none">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        How to Use the Random Order Generator
      </h2>
      <div className="space-y-4 text-gray-600 mb-12">
        <p>
          Our random order generator tool makes it simple to randomize any list of items. Whether you're 
          organizing a team roster, creating a playlist, or conducting a fair selection process, this 
          randomizer ensures completely random results every time.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Enter your items in the text box above, one per line or separated by commas</li>
          <li>Click the "Randomize" button to generate a random order</li>
          <li>Use the copy button to save your randomized list</li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Popular Uses for the Random Order Generator
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-3">Team Organization</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Randomize player positions in sports teams</li>
            <li>Create random project group assignments</li>
            <li>Organize fair team rotation schedules</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Entertainment</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Shuffle music playlists</li>
            <li>Randomize movie watch lists</li>
            <li>Create random game tournament brackets</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Why Choose Our Random Order Generator?
      </h2>
      <div className="space-y-4 text-gray-600 mb-12">
        <p>
          Our random order generator tool stands out for its simplicity and effectiveness. Using the 
          Fisher-Yates shuffle algorithm, it ensures truly random results every time. Whether you're a 
          teacher organizing student presentations or a team leader creating fair work rotations, our 
          random order generator provides reliable randomization instantly.
        </p>
        <p>
          The random order generator supports both comma-separated and line-by-line input formats, 
          making it flexible for various use cases. With its clean interface and instant results, 
          you can quickly generate random orders for any list of items.
        </p>
      </div>
    </div>
  );
}
import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
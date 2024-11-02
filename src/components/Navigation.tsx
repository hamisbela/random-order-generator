import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Random Order Generator' },
    { path: '/name-generator', label: 'Name Order Generator' },
    { path: '/draft-generator', label: 'Draft Order Generator' },
    { path: '/number-generator', label: 'Number Order Generator' },
  ];

  return (
    <nav className="bg-white shadow-sm mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Input({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}: InputProps) {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary';

  return (
    <div className="mb-0">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input 
        type={type}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        className={`${baseStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

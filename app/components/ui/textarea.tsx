import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export function Textarea({ 
  label, 
  error, 
  className = '', 
  ...props 
}: TextareaProps) {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary';

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea 
        className={`${baseStyles} ${errorStyles} ${className} min-h-[100px]`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

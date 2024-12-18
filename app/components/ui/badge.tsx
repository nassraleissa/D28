import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };

  return (
    <span 
      className={`
        inline-block px-2 py-1 rounded-full text-xs font-semibold 
        ${variantStyles[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

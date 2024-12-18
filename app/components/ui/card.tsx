import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }: CardContentProps) {
  return (
    <div 
      className={`p-4 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <div 
      className={`px-4 py-3 bg-gray-50 border-t ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

import React from 'react';

export default function Logo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="48" fill="#1b4332" />
      <path
        d="M50 10 C60 25, 85 30, 88 50 C90 70, 75 80, 50 85 C25 80, 10 70, 12 50 C15 30, 40 25, 50 10Z"
        fill="#2d6a4f"
        opacity="0.8"
      />
      <path
        d="M50 18 C58 28, 75 33, 78 48 C80 58, 70 70, 50 75 C30 70, 20 58, 22 48 C25 33, 42 28, 50 18Z"
        fill="#40916c"
      />
      
      <path d="M50 20 L50 70" stroke="#74c69d" strokeWidth="2.5" opacity="0.9" />
      <path d="M50 35 L38 42" stroke="#74c69d" strokeWidth="2" opacity="0.9" />
      <path d="M50 35 L62 42" stroke="#74c69d" strokeWidth="2" opacity="0.9" />
      <path d="M50 50 L35 58" stroke="#74c69d" strokeWidth="2" opacity="0.9" />
      <path d="M50 50 L65 58" stroke="#74c69d" strokeWidth="2" opacity="0.9" />
      
      <circle cx="50" cy="50" r="28" fill="#ffffff" opacity="0.95" />
      
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="'Outfit', Arial, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="#1b4332"
        letterSpacing="1"
      >
        JSK
      </text>
    </svg>
  );
}

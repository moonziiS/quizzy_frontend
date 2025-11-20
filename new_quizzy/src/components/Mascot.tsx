import { useEffect, useState } from "react";

interface MascotProps {
  mood?: "happy" | "excited" | "thinking" | "celebrating";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export const Mascot = ({ mood = "happy", size = "md", animate = true }: MascotProps) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (animate) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 200);
      }, 3000);
      return () => clearInterval(blinkInterval);
    }
  }, [animate]);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const getMascotExpression = () => {
    switch (mood) {
      case "excited":
        return (
          <>
            <circle cx="35" cy="45" r="4" fill="currentColor" />
            <circle cx="65" cy="45" r="4" fill="currentColor" />
            <path
              d="M 30 65 Q 50 80 70 65"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            {/* Star eyes */}
            <text x="28" y="42" fontSize="12">✨</text>
            <text x="58" y="42" fontSize="12">✨</text>
          </>
        );
      case "thinking":
        return (
          <>
            <circle cx="35" cy="45" r="3" fill="currentColor" />
            <circle cx="65" cy="45" r="3" fill="currentColor" />
            <path
              d="M 35 65 Q 50 62 65 65"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <text x="75" y="30" fontSize="16">🤔</text>
          </>
        );
      case "celebrating":
        return (
          <>
            <path d="M 30 40 L 40 50 L 30 50 Z" fill="currentColor" />
            <path d="M 70 40 L 60 50 L 70 50 Z" fill="currentColor" />
            <path
              d="M 25 65 Q 50 85 75 65"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <text x="35" y="25" fontSize="16">🎉</text>
            <text x="60" y="25" fontSize="16">🎉</text>
          </>
        );
      default: // happy
        return (
          <>
            {isBlinking ? (
              <>
                <path d="M 30 45 Q 35 48 40 45" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M 60 45 Q 65 48 70 45" stroke="currentColor" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <circle cx="35" cy="45" r="4" fill="currentColor" />
                <circle cx="65" cy="45" r="4" fill="currentColor" />
              </>
            )}
            <path
              d="M 30 65 Q 50 75 70 65"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${animate ? "animate-bounce-gentle" : ""}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-foreground drop-shadow-lg"
      >
        {/* Body */}
        <circle cx="50" cy="50" r="45" fill="hsl(var(--primary))" />
        <circle cx="50" cy="50" r="40" fill="hsl(var(--accent))" opacity="0.5" />
        
        {/* Ears/Antennas */}
        <circle cx="25" cy="15" r="8" fill="hsl(var(--secondary))" />
        <circle cx="75" cy="15" r="8" fill="hsl(var(--secondary))" />
        <line x1="30" y1="20" x2="35" y2="30" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="20" x2="65" y2="30" stroke="hsl(var(--secondary))" strokeWidth="3" strokeLinecap="round" />
        
        {/* Face */}
        {getMascotExpression()}
        
        {/* Cheeks */}
        <circle cx="20" cy="55" r="8" fill="hsl(var(--secondary))" opacity="0.6" />
        <circle cx="80" cy="55" r="8" fill="hsl(var(--secondary))" opacity="0.6" />
      </svg>
    </div>
  );
};

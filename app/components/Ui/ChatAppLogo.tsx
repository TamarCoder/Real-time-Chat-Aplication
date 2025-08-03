import React from "react";

interface ChatAppLogoProps {
  width?: number;
  height?: number;
  className?: string;
  showAnimation?: boolean;
  centered?: boolean;
}

const ChatAppLogo: React.FC<ChatAppLogoProps> = ({
  width = 300,
  height = 120,
  className = "",
  showAnimation = true,
  centered = false,
}) => {
  const logoElement = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="comboBubble1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#a855f7", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="comboBubble2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#6366f1", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="comboBubble3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f97316", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#f59e0b", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="comboTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#f97316", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {/* Chat Bubbles on the left */}
      <g transform="translate(10, 20)">
        {/* Large bubble */}
        <path
          d="M5 25 Q5 15 15 15 L35 15 Q45 15 45 25 L45 35 Q45 45 35 45 L15 45 L5 55 Z"
          fill="url(#comboBubble1)"
        />

        {/* Medium bubble */}
        <path
          d="M25 5 Q25 0 30 0 L45 0 Q50 0 50 5 L50 15 Q50 20 45 20 L35 20 L28 25 Z"
          fill="url(#comboBubble2)"
        />

        {/* Small bubble */}
        <path
          d="M40 35 Q40 32 43 32 L53 32 Q56 32 56 35 L56 40 Q56 43 53 43 L48 43 L43 46 Z"
          fill="url(#comboBubble3)"
        />
      </g>

      {/* Typography on the right */}
      <text
        x="80"
        y="55"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="url(#comboTextGrad)"
      >
        ChatApp
      </text>

      {/* Connecting element */}
      <path
        d="M65 45 Q70 40 75 45"
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Decorative dots around text with optional animation */}
      <circle cx="250" cy="25" r="3" fill="#8b5cf6" opacity="0.7">
        {showAnimation && (
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="260" cy="40" r="2.5" fill="#f97316" opacity="0.6">
        {showAnimation && (
          <animate
            attributeName="opacity"
            values="0.2;0.8;0.2"
            dur="2.5s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="255" cy="55" r="2" fill="#3b82f6" opacity="0.8">
        {showAnimation && (
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="1.8s"
            repeatCount="indefinite"
          />
        )}
      </circle>
    </svg>
  );

  // Centered wrapper
  if (centered) {
    return (
      <div className="flex justify-center items-center w-full">
        {logoElement}
      </div>
    );
  }

  return logoElement;
};

export default ChatAppLogo;

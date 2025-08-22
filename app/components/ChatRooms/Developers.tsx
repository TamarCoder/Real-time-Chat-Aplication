import React from 'react';



const DevelopersRoom: React.FC  = () => {

    const DevelopersIcon = () => (
        <svg
            width="45"
            height="45"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            style={{paddingLeft:'10px'}}>
            <defs>
                <linearGradient id="developersBubble" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6" }} />
                    <stop offset="100%" style={{ stopColor: "#6366f1" }} />
                </linearGradient>
            </defs>
            <path
                d="M4 12 Q4 8 8 8 L20 8 Q24 8 24 12 L24 18 Q24 22 20 22 L10 22 L4 26 Z"
                fill="url(#developersBubble)"
            />
            <text
                x="16"
                y="19"
                textAnchor="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
            >
                {"</>"}
            </text>
        </svg>
    );

    return (
        <button className= 'flex items-center gap-3 w-full h-[50px] px-6 py-3 rounded-md text-lg transition-all duration-200 relative bg-sky-400'  >
            <DevelopersIcon  />
            <span className="truncate"># Developers </span>

        </button>
    );
};

export default DevelopersRoom;
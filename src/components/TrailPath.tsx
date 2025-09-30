export const TrailPath = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 800 2000"
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <filter id="pathGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Trail Path - Hidden on mobile, visible on desktop */}
      <path
        className="trail-path animate-draw-path hidden md:block"
        d="M400 50 
           C 250 200, 250 300, 400 450
           C 550 600, 550 700, 400 850  
           C 250 1000, 250 1100, 400 1250
           C 550 1400, 550 1500, 400 1650
           C 300 1750, 350 1850, 400 1950"
        filter="url(#pathGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mobile Trail - Straight line down the center */}
      <line
        className="trail-path animate-draw-path md:hidden"
        x1="400"
        y1="50"
        x2="400"
        y2="1950"
        filter="url(#pathGlow)"
        strokeLinecap="round"
      />

      {/* Trail Footsteps/Markers */}
      <g className="opacity-60">
        <circle
          cx="400"
          cy="200"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <circle
          cx="450"
          cy="450"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="350"
          cy="700"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <circle
          cx="450"
          cy="950"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <circle
          cx="350"
          cy="1200"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <circle
          cx="400"
          cy="1450"
          r="4"
          fill="hsl(var(--trail-brown))"
          className="animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </g>
    </svg>
  );
};

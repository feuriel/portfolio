import React from "react";

export const LightAnimation = ({ initialDelay = 4.3 }) => {
  // Convert seconds to SVG time format (e.g., 1.5 => "1.5s")
  const delay = (seconds) => `${seconds}s`;

  // Calculate staggered delays
  const delays = {
    topLeft: initialDelay,
    bottomRight: initialDelay + 0.8,
    topRight: initialDelay + 1.6,
    bottomLeft: initialDelay + 1,
  };
  const strokeWidth = 0.6;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <defs>
          {/* Gradients */}
          <linearGradient
            id="line-grad1" // Top-left to center
            x1="0"
            y1="0"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--primary-color, white)" />
            <stop
              offset="0.7"
              stopColor="var(--primary-color, white)"
              stopOpacity="0.8"
            />
            <stop
              offset="1"
              stopColor="var(--primary-color, white)"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="line-grad2" // Top-right to center
            x1="100"
            y1="0"
            x2="50"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--primary-color, white)" />
            <stop
              offset="0.7"
              stopColor="var(--primary-color, white)"
              stopOpacity="0.8"
            />
            <stop
              offset="1"
              stopColor="var(--primary-color, white)"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="line-grad3" // Bottom-left to center
            x1="0"
            y1="50"
            x2="50"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--primary-color, white)" />
            <stop
              offset="0.6"
              stopColor="var(--primary-color, white)"
              stopOpacity="0.8"
            />
            <stop
              offset="1"
              stopColor="var(--primary-color, white)"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="line-grad4" // Bottom-right to center
            x1="100"
            y1="50"
            x2="50"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--primary-color, white)" />
            <stop
              offset="0.7"
              stopColor="var(--primary-color, white)"
              stopOpacity="0.8"
            />
            <stop
              offset="1"
              stopColor="var(--primary-color, white)"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Top-left to center */}
        <line
          x1="0"
          y1="0"
          x2="50"
          y2="50"
          stroke="url(#line-grad1)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="100 150"
          strokeDashoffset="100"
          strokeOpacity="0"
          filer="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0"
            dur="2s"
            begin={delay(delays.topLeft)}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0;0.8;0"
            keyTimes="0;0.1;1"
            dur="2s"
            begin={delay(delays.topLeft)}
            repeatCount="indefinite"
          />
        </line>

        {/* 2. Bottom-right to center */}
        <line
          x1="100"
          y1="50"
          x2="50"
          y2="100"
          stroke="url(#line-grad4)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="75 150"
          strokeDashoffset="75"
          strokeOpacity="0"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="75;0"
            dur="2s"
            begin={delay(delays.bottomRight)}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0;0.8;0"
            keyTimes="0;0.1;1"
            dur="2s"
            begin={delay(delays.bottomRight)}
            repeatCount="indefinite"
          />
        </line>

        {/* 3. Top-right to center */}
        <line
          x1="100"
          y1="0"
          x2="50"
          y2="50"
          stroke="url(#line-grad2)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="100 150"
          strokeDashoffset="100"
          strokeOpacity="0"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0"
            dur="2s"
            begin={delay(delays.topRight)}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0;0.8;0"
            keyTimes="0;0.1;1"
            dur="2s"
            begin={delay(delays.topRight)}
            repeatCount="indefinite"
          />
        </line>

        {/* 4. Bottom-left to center */}
        <line
          x1="0"
          y1="50"
          x2="50"
          y2="100"
          stroke="url(#line-grad3)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray="75 150"
          strokeDashoffset="75"
          strokeOpacity="0"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="75;0"
            dur="2s"
            begin={delay(delays.bottomLeft)}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            values="0;0.8;0"
            keyTimes="0;0.1;1"
            dur="2s"
            begin={delay(delays.bottomLeft)}
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
};

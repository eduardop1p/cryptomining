'use client';

import { Container } from './styled';

export default function Loading() {
  return (
    <Container title="Loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: 'auto',
          background: ' rgba(255, 255, 255, 0)',
          display: 'block',
          shapeRendering: 'auto',
          animationPlayState: 'running',
          animationDelay: '0s',
          flex: 'none',
        }}
        width="28px"
        height="28px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="11"
          r="33"
          strokeDasharray="155.50883635269477 53.83627878423159"
          style={{ animationPlayState: 'running', animationDelay: '0s' }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            style={{ animationPlayState: 'running', animationDelay: '0s' }}
          ></animateTransform>
        </circle>
      </svg>
    </Container>
  );
}

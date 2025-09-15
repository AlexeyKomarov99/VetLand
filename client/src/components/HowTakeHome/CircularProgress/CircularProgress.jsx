import React from 'react';
import './CircularProgress.scss';

const CircularProgress = ({ progress, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg className="circular-progress__svg" width={size} height={size}>
        {/* Фоновый круг */}
        <circle
          className="circular-progress__background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Прогресс */}
        <circle
          className="circular-progress__circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="circular-progress__text">
        <span className="circular-progress__percentage">{progress}%</span>
        <span className="circular-progress__label">заполнено</span>
      </div>
    </div>
  );
};

export default CircularProgress;
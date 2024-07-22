

import React from 'react';

interface ProgressBarProps {
  value: number; 
  max: number;   
  color?: string; 
  height?: string; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  color = 'bg-blue-500',
  height = 'h-2'
}) => {

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden`}>
      <div
        className={`transition-all duration-300 ${color}`}
        style={{ width: `${percentage}%`, height: '100%' }}
      />
    </div>
  );
};

export default ProgressBar;

import React from 'react';

import Box from './Box';

interface IProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ value }) => {
  return (
    <Box backgroundColor="white" height={5} borderRadius="xs" overflow="hidden">
      <Box width={`${value}%`} backgroundColor="yellow" />
    </Box>
  );
};

export default ProgressBar;

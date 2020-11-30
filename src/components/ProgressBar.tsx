import React from 'react';

import Box from './Box';
interface IProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <Box backgroundColor="greyLighter" width="100%" height={5} borderRadius="xs" overflow="hidden">
      <Box width={`${progress}%`} height={5} backgroundColor="yellow" />
    </Box>
  );
};

export default ProgressBar;

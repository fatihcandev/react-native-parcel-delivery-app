import React from 'react';

import { Box } from 'components';
interface IProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <Box
      backgroundColor="greyLighter"
      height={5}
      borderRadius="xs"
      overflow="hidden">
      <Box width={`${progress}%`} height={5} backgroundColor="yellow" />
    </Box>
  );
};

export default ProgressBar;

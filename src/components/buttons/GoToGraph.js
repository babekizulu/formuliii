//libs
import React from 'react';
//components
import Link from '../Link';
//icons
import InsightsIcon from '@mui/icons-material/Insights';
const GoToGraph = ({ formula }) => {
  return (
    <Link href={`/graph/${formula}`} className='goto-btn'>
      <InsightsIcon />
    </Link>
  );
};

export default GoToGraph;

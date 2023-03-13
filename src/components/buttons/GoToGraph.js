//libs
import React from 'react';
//components
import Link from '../Link';

const GoToGraph = ({ formula }) => {
  return (
    <Link href={`/graph/${formula}`} className='graph-btn'>
      Graph
    </Link>
  );
};

export default GoToGraph;

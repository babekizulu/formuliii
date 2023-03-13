//libs
import React from 'react';
//components
import Link from '../Link';

const GoToInfo = ({ formula }) => {
  return (
    <Link href={`/info/${formula}`} className='info-btn'>
      Info
    </Link>
  );
};

export default GoToInfo;

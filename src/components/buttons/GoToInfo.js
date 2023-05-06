//libs
import React from 'react';
//components
import Link from '../Link';
//icons
import SchoolIcon from '@mui/icons-material/School';

const GoToInfo = ({ formula }) => {
  return (
    <Link href={`/info/${formula}`} className='goto-btn'>
      <SchoolIcon />
    </Link>
  );
};

export default GoToInfo;

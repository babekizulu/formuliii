//libs
import React from 'react';
//components
import Link from '../Link';
//icons
import DatasetIcon from '@mui/icons-material/Dataset';

const AddToSpreadsheet = () => {
  return (
    <Link href='/spreadsheet' className='goto-btn'>
      <DatasetIcon />
    </Link>
  );
};

export default AddToSpreadsheet;

//libs
import React from 'react';
//icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyBtn = ({ copyHandler }) => {
  <div className='copy-btn-container'>
    <button className='copy-btn' onClick={copyHandler}>
      <ContentCopyIcon />
    </button>
  </div>;
};

export default CopyBtn;

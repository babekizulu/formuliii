//libs
import React from 'react';
//icons
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const PasteBtn = ({ pasteHandler }) => {
  return (
    <div className='paste-btn-container'>
      <button className='paste-btn' onClick={() => pasteHandler()}>
        <ContentPasteIcon />
      </button>
    </div>
  );
};

export default PasteBtn;

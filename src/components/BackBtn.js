import React from 'react';
//component
import Link from './Link';

const BackBtn = ({prevUrl}) => {
    return (
       <Link href={prevUrl} className='back-btn-container'>
        <p>BACK</p>
       </Link>
    );
};

export default BackBtn;
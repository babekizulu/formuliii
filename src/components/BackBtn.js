import React from 'react';
//component
import Link from './Link';

const BackBtn = ({prevUrl}) => {
    return (
       <Link href={prevUrl} className='back-btn-container'>
        <p>back</p>
       </Link>
    );
};

export default BackBtn;
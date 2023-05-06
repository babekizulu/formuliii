//libs
import React, { useState, useEffect } from 'react';
//components
import CopyBtn from '../buttons/CopyBtn';

const Solution = ({ solution, solutionUM }) => {
  //state management
  const [writeAccess, setWriteAccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  //handlers
  const writeAccessHandler = () => {
    //check browser permissions
    navigator.permissions
      .query({
        name: 'write-on-clipboard',
      })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          setWriteAccess(true);
        }
      });
  };
  const copyHandler = () => {
    if (writeAccess) {
      navigator.clipboard.writeText(solution).then(
        () => {
          setCopied(true);
        },
        (err) => {
          console.error(`Error: ${err}`);
          setCopyFailed(true);
        },
      );
    }
  };
  //side effects
  useEffect(() => {
    writeAccessHandler();
  }, []);
  console.log(copied, copyFailed);
  return (
    <div className='solution-container'>
      <h3 className='solution'>
        {solution} {solutionUM}
      </h3>
      <CopyBtn copyHandler={copyHandler} />
    </div>
  );
};

export default Solution;

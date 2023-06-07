//libs
import React, { useState } from 'react';
//components
import Link from './Link';
//icons
import EconomicsIcon from './EconomicsIcon';
import PhysicsIcon from './PhysicsIcon';
import AccountingIcon from './AccountingIcon';

const Explorer = () => {
  const [economicsColor, setEconomicsColor] = useState('#000');
  const [physicsColor, setPhysicsColor] = useState('#000');
  const [accountingColor, setAccountingColor] = useState('#000');
  //handlers
  const onHover = (iconName) => {
    if (iconName === 'economics') {
      setEconomicsColor('#ffbb38');
    }
    if (iconName === 'physics') {
      setPhysicsColor('#8cd6ff');
    }
    if (iconName === 'accounting') {
      setAccountingColor('#ff5959');
    }
  };
  const unHover = () => {
    setEconomicsColor('#000');
    setPhysicsColor('#000');
    setAccountingColor('#000');
  };
  return (
    <div className='explorer'>
      <div className='explorer-grid'>
        <Link href='/economics' className='explorer-item'>
          <EconomicsIcon
            itemName='economics'
            color={economicsColor}
            onHover={onHover}
            unHover={unHover}
          />
        </Link>
        <Link href='/physics' className='explorer-item'>
          <PhysicsIcon
            itemName='physics'
            color={physicsColor}
            onHover={onHover}
            unHover={unHover}
          />
        </Link>
        <Link href='/accounting' className='explorer-item'>
          <AccountingIcon
            itemName='accounting'
            color={accountingColor}
            onHover={onHover}
            unHover={unHover}
          />
        </Link>
      </div>
    </div>
  );
};

export default Explorer;

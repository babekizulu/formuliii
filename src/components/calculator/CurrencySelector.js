//libs
import React from 'react';

const CurrencySelector = ({ selectHandler, selected }) => {
  const options = [
    {
      label: 'Rands(ZAR)',
      value: 'rands',
    },
    {
      label: 'Pounds(£)',
      value: 'pounds',
    },
    {
      label: 'Dollars($)',
      value: 'dollars',
    },
    {
      label: 'Euros(€)',
      value: 'euros',
    },
    {
      label: 'Yuan(¥)',
      value: 'yuan',
    },
    {
      label: 'Ruble(₽)',
      value: 'ruble',
    },
    {
      label: 'Algerian Dinar(DA)',
      value: 'algerianDinar',
    },
    {
      label: 'Kwanza(Kz)',
      value: 'kwanza',
    },
    {
      label: 'Franc(Fr)',
      value: 'franc',
    },
    {
      label: 'Rupee(₹)',
      value: 'rupee',
    },
    {
      label: 'Pula(P)',
      value: 'pula',
    },
    {
      label: 'Nakfa(Nkf)',
      value: 'nakfa',
    },
    {
      label: 'Emalangeni(E)',
      value: 'emalangeni',
    },
    {
      label: 'Birr(Br)',
      value: 'birr',
    },
    {
      label: 'Dalasi(D)',
      value: 'dalasi',
    },
    {
      label: 'Cedi(GH₵)',
      value: 'cedi',
    },
    {
      label: 'Shillings(Shs)',
      value: 'shillings',
    },
    {
      label: 'Loti(L)',
      value: 'loti',
    },
    {
      label: 'Kwacha(K)',
      value: 'kwacha',
    },
    {
      label: 'Ariary(Ar)',
      value: 'ariary',
    },
    {
      label: 'Ouguiya(UM)',
      value: 'ouguiya',
    },
    {
      label: 'Mauritian Rupee(Rs)',
      value: 'mauritianRupee',
    },
    {
      label: 'Dirham(DH)',
      value: 'dirham',
    },
    {
      label: 'Metical(Mt)',
      value: 'metical',
    },
    {
      label: 'Naira(₦)',
      value: 'naira',
    },
    {
      label: 'Sahrawi Peseta(Pts)',
      value: 'sahrawiPeseta',
    },
    {
      label: 'Dobra(Db)',
      value: 'dobra',
    },
    {
      label: 'Leone(Le)',
      value: 'leone',
    },
    {
      label: 'Sudanese Pounds(LS)',
      value: 'sudanesePounds',
    },
    {
      label: `Pa'anga(T$)`,
      value: 'paanga',
    },
    {
      label: 'Tunisian Dinar(DT)',
      value: 'tunisianDinar',
    },
    {
      label: 'Libyan Dinar(LD)',
      value: 'libyanDinar',
    },
  ];
  return (
    <div className='currency-selector-container'>
      <select
        value={selected}
        className='currency-selector'
        onChange={(e) => selectHandler(e)}
      >
        {options.map(({ value, label }) => {
          return (
            <option value={value} key={label}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default CurrencySelector;

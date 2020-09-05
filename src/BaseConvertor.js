import React, { useState } from 'react';
import Input from './Input';

const isValidNumberForBase = function (value, base) {
  return value
    .split('')
    .every((digit) => Number.isInteger(parseInt(digit, base)));
};

const BaseConvertor = (props) => {
  const [state, setState] = useState({ number: 0 });

  const onChange = ({ value }, baseId) => {
    if (isValidNumberForBase(value, baseId)) {
      setState({ number: parseInt(value, baseId) });
    }
  };

  const baseIds = [...Array(props.count - 1).keys()];
  const inputSections = baseIds.map((id) => (
    <Input key={id} baseId={id + 2} number={state.number} onChange={onChange} />
  ));

  return (
    <div className="container">
      <h1>BaseConvertor</h1>
      {inputSections}
    </div>
  );
};

export default BaseConvertor;

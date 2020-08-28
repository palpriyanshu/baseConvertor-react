import React from 'react';

const convertBase = function (number, from, to) {
  return parseInt(number, from).toString(to);
};

const Label = ({ baseId }) => (
  <div className="label">
    <label>Base{baseId} </label>
  </div>
);

const Input = (props) => {
  const { baseId, currentValue, currentBase } = props;
  const value = currentValue
    ? convertBase(currentValue, currentBase, baseId)
    : currentValue;

  return (
    <div className="inputSection">
      <Label baseId={baseId} />
      <input value={value} onChange={(e) => props.onChange(baseId, e.target)} />
    </div>
  );
};

export default Input;

import React from 'react';

const Label = ({ baseId }) => (
  <div className="label">
    <label>Base{baseId} </label>
  </div>
);

const Input = (props) => {
  const { baseId, number } = props;
  const value = isNaN(number) ? '' : number.toString(baseId);

  return (
    <div className="inputSection">
      <Label baseId={baseId} />
      <input value={value} onChange={(e) => props.onChange(e.target, baseId)} />
    </div>
  );
};

export default Input;

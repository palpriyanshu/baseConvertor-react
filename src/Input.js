import React from 'react';

const convertBase = function (number, from, to) {
  return parseInt(number, from).toString(to);
};

const Input = (props) => {
  const { targetBase, currentValue, currentBase } = props;
  const value =
    currentValue === ''
      ? currentValue
      : convertBase(currentValue, currentBase, targetBase);

  return (
    <div className="inputBox">
      <label>base{targetBase} </label>
      <input
        value={value}
        onChange={(e) => props.onChange(targetBase, e.target.value)}
      />
    </div>
  );
};

export default Input;

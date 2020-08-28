import React from 'react';

const Input = (props) => {
  const { targetBase, currentValue, currentBase } = props;
  const value =
    currentValue === ''
      ? ''
      : convertBase(currentValue, currentBase, targetBase);

  return (
    <div>
      <label>base{targetBase} </label>
      <input
        value={value}
        onChange={(e) => props.onChange(targetBase, e.target.value)}
      />
    </div>
  );
};

const convertBase = function (number, from, to) {
  return parseInt(number, from).toString(to);
};

const isValidNumberForBase = function (base, value) {
  return value
    .split('')
    .every((digit) => Number.isInteger(parseInt(digit, base)));
};

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentValue: '', currentBase: null };
    this.onChange = this.onChange.bind(this);
  }

  onChange(currentBase, value) {
    this.setState((state) => {
      if (isValidNumberForBase(currentBase, value)) {
        return { currentValue: value, currentBase };
      }
    });
  }

  render() {
    const baseIds = [...Array(this.props.count - 1).keys()];
    return (
      <div>
        <h1>BaseConvertor</h1>
        {baseIds.map((id) => (
          <Input
            targetBase={id + 2}
            key={id}
            currentValue={this.state.currentValue}
            currentBase={this.state.currentBase}
            onChange={this.onChange}
          />
        ))}
      </div>
    );
  }
}

export default BaseConvertor;

import React from 'react';
import Input from './Input';

const isValidNumberForBase = function (value, base) {
  return value
    .split('')
    .every((digit) => Number.isInteger(parseInt(digit, base)));
};

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }, baseId) {
    if (isValidNumberForBase(value, baseId)) {
      this.setState({ number: parseInt(value, baseId) });
    }
  }

  render() {
    const baseIds = [...Array(this.props.count - 1).keys()];
    const inputSections = baseIds.map((id) => (
      <Input
        key={id}
        baseId={id + 2}
        number={this.state.number}
        onChange={this.onChange}
      />
    ));

    return (
      <div className="container">
        <h1>BaseConvertor</h1>
        {inputSections}
      </div>
    );
  }
}

export default BaseConvertor;

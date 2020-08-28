import React from 'react';
import Input from './Input';

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

  onChange(currentBase, { value }) {
    if (isValidNumberForBase(currentBase, value)) {
      this.setState({ currentValue: value, currentBase });
    }
  }

  render() {
    const baseIds = [...Array(this.props.count - 1).keys()];
    const inputSections = baseIds.map((id) => (
      <Input
        key={id}
        baseId={id + 2}
        currentValue={this.state.currentValue}
        currentBase={this.state.currentBase}
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

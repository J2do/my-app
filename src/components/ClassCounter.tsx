import React from "react";

interface IProps {
  props: any;
  count: any;
}

class ClassCounter extends React.Component<IProps> {
  constructor({ props }: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ state: this.props.count + 1 });
  }
  decrement() {
    this.setState({ state: this.props.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
export default ClassCounter;

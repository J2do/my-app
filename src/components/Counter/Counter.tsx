import React from "react";
import "./Counter.css";

interface IProps {
  initialCount: number;
}

export class Counter extends React.Component<IProps> {
  private timer: NodeJS.Timer | null = null;
  public readonly state = { count: this.props.initialCount };

  constructor(props: IProps) {
    super(props);

    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleClickPlus = this.handleClickPlus.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private handleClickMinus() {
    this.setState({ count: this.state.count - 100 });
  }

  private handleClickPlus() {
    this.setState({ count: this.state.count + 100 });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.handleClickMinus}>-</button>
        {this.state.count}
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }
}

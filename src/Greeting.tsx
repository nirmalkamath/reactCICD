import { Component } from "react";

type Props = {
  name: string;
};

type State = {
  count: number;
};

class Greeting extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Greeting;

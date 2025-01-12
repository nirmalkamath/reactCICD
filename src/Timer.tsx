import { Component } from "react";

// Define Props and State types
type Props = {};

type State = {
  time: number;
};

class Timer extends Component<Props, State> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  // Lifecycle method: Runs after the component is mounted
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  // Lifecycle method: Runs before the component is removed
  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.time} seconds</h2>
      </div>
    );
  }
}

export default Timer;
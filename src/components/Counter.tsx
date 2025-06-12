import React, { Component } from "react";

// Define the shape of the state
type CounterState = {
    count: number; // count: Stores the current counter value
};

// No props are used, but we must still define the props type
type CounterProps = {}; // Empty object for no props

// Class component with typed props and state
class Counter extends Component<CounterProps, CounterState> {
    // Initialize the state
    state: CounterState = {
        count: 0,
    };

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Render JSX
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;

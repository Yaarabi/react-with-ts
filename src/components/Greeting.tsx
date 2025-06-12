import React from "react";

// Define a type for the props
type GreetingProps = {
    name: string; // name: The name to display in the greeting
};

// Functional component using the props type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;

import React, { ReactElement, ReactNode } from "react";
import { ICounter } from "../../models/ICounter";

interface Props {
    counter: ICounter,
    // If you want to pass children, you have to declare its type as ReactNode instead of ReactElement.
    // Because, ReactNode supports multiple child as a children.
    children: ReactNode;
    onDecrement: (counter: ICounter) => void;
    onIncrement: (counter: ICounter) => void;
}

// This is how, props can be declared for a class based components.
class Counter extends React.Component<Props> {

    styles = {
        fontSize: 20,
        fontWeight: "bold",
    };

    renderCounterText = () => (
        <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
        </span>
    );

    renderIncrementAndDecrementBtn = () => {
        return (
            <>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-primary">
                    Increment
                </button>{" "}
                <button
                    className="btn btn-danger"
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    disabled={this.props.counter.value === 0}
                >
                    Decrement
                </button>
            </>
        );
    };

    getBadgeClasses() {
        let classes = "m-2 badge bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount = () => (this.props.counter.value === 0 ? "zero" : this.props.counter.value);

    render() {
        return (
            <main className="container">
                {this.props.children}
                {this.renderCounterText()}
                {this.renderIncrementAndDecrementBtn()}
                <br /> <br />
            </main>
        );
    }
}

export default Counter;

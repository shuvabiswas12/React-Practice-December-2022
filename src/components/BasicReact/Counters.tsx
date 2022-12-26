import * as React from "react";
import Counter from "./Counter";
import { ICounter } from "../../models/ICounter";

interface Props {
    counters: ICounter[],
    handleDecrement: (counter: ICounter) => void;
    handleIncrement: (counter: ICounter) => void;
}

class Counters extends React.Component<Props> {


    renderHeaderText = () => <h3 className="text-center">React Learning App.</h3>;

    renderCounterComponents = () =>
        this.props.counters.map((c) => (
            <Counter key={c.id} counter={c} onDecrement={this.props.handleDecrement} onIncrement={this.props.handleIncrement}>
                <h4>Counter no. # {c.id}</h4>
            </Counter>
        ));

    render() {
        return (
            <div>
                {this.renderHeaderText()} <br />
                {this.renderCounterComponents()} <br />
            </div>
        );
    }
}

export default Counters;

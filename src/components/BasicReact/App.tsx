import React from "react";
import Counters from "./Counters";
import Navbar from "../Navbar";
import { ICounter } from "../../models/ICounter";

class App extends React.Component {
    state = {
        counters: [
            { id: 1, value: 10 },
            { id: 2, value: 3 },
            { id: 3, value: 0 },
            { id: 4, value: 30 },
        ],
    };

    handleDecrement = (counter: ICounter) => {
        let index = this.state.counters.indexOf(counter);
        this.setState(() => this.state.counters[index].value--);
    };

    handleIncrement = (counter: ICounter) => {
        let index = this.state.counters.indexOf(counter);
        this.setState(() => this.state.counters[index].value++);
    };

    render() {
        return (
            <>
                <Navbar
                    brandName="Basic React"
                    notificationsValue={
                        this.state.counters.filter((counter) => counter.value !== 0).length
                    }
                />
                <Counters
                    counters={this.state.counters}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                />
            </>
        );
    }
}

export default App;

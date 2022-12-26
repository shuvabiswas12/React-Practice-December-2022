import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
    state = {
        items: [
            { id: 1, name: "first item" },
            { id: 2, name: "second item" },
            { id: 3, name: "third item" },
        ],
    };

    renderitems = () => (
        <ul>
            {this.state.items.map((i) => (
                <li key={i.id}>
                    <Link to={"/products/" + i.id}>{i.name}</Link>
                </li>
            ))}
        </ul>
    );

    render(): React.ReactNode {
        return <div className="container">{this.renderitems()}</div>;
    }
}

export default Products;

import * as React from "react";
import Movies from "./services/movieServices";

class Movie extends React.Component {
    state = {
        movies: Movies,
        counter: 0,
    };

    handleDelete = (_id: string) => {
        const answer = window.confirm("Do you want to delete this movie?");
        if (answer) {
            let updatedMovies = this.state.movies.filter((m) => m._id !== _id);
            this.setState(() => (this.state.movies = updatedMovies));
        }
    };

    renderMovie = () => {
        return this.state.movies.map((m) => (
            <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                    <button
                        onClick={() => this.handleDelete(m._id)}
                        className="btn btn-sm btn-danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ));
    };

    renderCounter = () => {
        let el = (
            <>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.setState(() => this.state.counter++)}>Increment</button>
            </>
        );
        return el;
    };

    renderTotalMoviesCount = () => {
        let moviesCount = this.state.movies.length;
        let message = moviesCount && (
            <h3>There are total {moviesCount} movies in the current database.</h3>
        );
        return message || "";
    };

    renderMoviesTable = () => {
        if (this.state.movies.length === 0) {
            return (
                <h3 className="text-center">
                    {" "}
                    <br /> There are no movies are listed right now!{" "}
                </h3>
            );
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{this.renderMovie()}</tbody>
            </table>
        );
    };

    render() {
        return (
            <>
                {this.renderTotalMoviesCount()} {this.renderMoviesTable()} {this.renderCounter()}
            </>
        );
    }
}

export default Movie;

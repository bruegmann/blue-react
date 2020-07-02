import React from "react";
import Search from "../../components/Search";

class SearchExample extends React.Component {
    constructor() {
        super();

        this.state = {
            search: ""
        };
    }

    render() {
        return (
            <div>
                <Search
                    body
                    reset
                    value={this.state.search}
                    onChange={({ target }) => this.setState({ search: target.value })}
                    onSubmit={() => alert("Do form submit now!")}
                    placeholder="Begin typing..."
                />
            </div>
        );
    }
}

export default SearchExample;
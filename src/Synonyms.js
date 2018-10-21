import React from "react";

const key = process.env.KEY;

class Synonyms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      synonyms: []
    };
  }

  handleWordChange = event => {
    this.setState({ word: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();
    fetch(`http://words.bighugelabs.com/api/2/${key}/${this.state.word}/json`)
      .then(data => data.json())
      .then(data => data.noun.syn.slice(0, 5))
      .then(data => this.setState({ synonyms: data }))
      .catch(error => this.setState({ synonyms: ["nothing found"] }));
  };

  render() {
    return (
      <form>
        <div>
          <p>Search for synonyms</p>
        </div>
        <input
          type="text"
          onChange={this.handleWordChange}
          value={this.state.word}
          placeholder="search for..."
        />
        <button onClick={this.handleSearch}>search</button>
        <p>{this.state.synonyms}</p>
      </form>
    );
  }
}

export default Synonyms;

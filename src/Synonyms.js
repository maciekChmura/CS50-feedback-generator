import React from "react";

const key = process.env.KEY;

class Synonyms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      synonyms: [],
      APIError: ""
    };
  }

  handleWordChange = event => {
    this.setState({ word: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();
    this.setState({
      APIError: "",
      synonyms: []
    });
    let responseData;
    fetch(`http://words.bighugelabs.com/api/2/${key}/${this.state.word}/json`)
      .then(res => {
        responseData = res;
        return res.json();
      })
      .then(data => {
        this.setState({ synonyms: data.noun.syn.slice(0, 6) });
      })
      .catch(err => {
        switch (responseData.status) {
          case 500:
            this.setState({
              APIError: `Synonyms API Error: ${responseData.statusText}`
            });
            break;
          default:
            this.setState({ APIError: responseData.statusText });
            break;
        }
      });
  };

  render() {
    return (
      <form className="synonyms-box">
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
        <ul>
          {this.state.synonyms.map(synonym => {
            return (
              <li className="synonyms-list-item" key={synonym}>
                {synonym}
              </li>
            );
          })}
        </ul>
        <p>{this.state.APIError}</p>
      </form>
    );
  }
}

export default Synonyms;

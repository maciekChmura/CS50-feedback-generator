import React from "react";
import styled from "styled-components";

const key = process.env.KEY;

const Form = styled.form`
  padding-top: 20px;
`;

const Title = styled.p`
  font-style: italic;
  font-size: 1.2em;
`;

const SynonymsText = styled.p`
  font-style: italic;
  font-size: 1.2em;
`;

const SearchButton = styled.button`
  margin-left: 20px;
`;

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
      <Form>
        <div>
          <Title>Search for synonyms:</Title>
        </div>
        <input
          type="text"
          onChange={this.handleWordChange}
          value={this.state.word}
          placeholder="search for..."
        />
        <SearchButton onClick={this.handleSearch}>search</SearchButton>
        <SynonymsText>{this.state.synonyms.join(", ")}</SynonymsText>
        <p>{this.state.APIError}</p>
      </Form>
    );
  }
}

export default Synonyms;

import React from "react";
import axios from "axios";

let quotes = [];
let randomNumber = 0;
let randomColor = Math.floor(Math.random() * 16777215).toString(16);

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      quote: "",
      author: "",
      color: randomColor,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`https://dummyjson.com/quotes`)
    .then(res => {
      quotes = res.data.quotes;
      console.log(quotes);
      
      this.setState({ 
        id: randomNumber,
        quote: quotes[randomNumber].quote,
        author: quotes[randomNumber].author,
        color: randomColor,
      });
    })
    .catch(error => console.log(error));
  }

  handleClick() {
    let checkEqual = (num) => {
      return num !== this.state.id
        ? num
        : checkEqual(Math.floor(Math.random() * quotes.length));
    };
    randomNumber = checkEqual(Math.floor(Math.random() * quotes.length));
    randomColor = Math.floor(Math.random() * 16777215).toString(16);

    this.setState({
      id: randomNumber,
      quote: quotes[randomNumber].quote,
      author: quotes[randomNumber].author,
      color: randomColor,
    });
  }

  render() {
    return (
      <div style={{ color: "#" + this.state.color }}>
        <p id="text" className="quote text-center">
          <i className="fa-solid fa-quote-left"></i> {this.state.quote}{" "}
          <i className="fa-solid fa-quote-right"></i>
        </p>
        <p id="author" className="author text-end">
          - {this.state.author} -
        </p>
        <div className="row buttons">
          <div className="col-8 text-left left">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
              className="btn btn-primary"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="btn btn-primary">
              <i className="fa-brands fa-tumblr"></i>
            </a>
          </div>
          <div className="col-4 text-end">
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

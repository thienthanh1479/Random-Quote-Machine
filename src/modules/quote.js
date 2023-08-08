import React from "react";

const quotes = [
  {
    author: "Vincent Van Gogh",
    text: "I would rather die of passion than of boredom.",
  },
  {
    author: "Helen Keller",
    text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
  },
  {
    author: "Michael Jordan",
    text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  },
  {
    author: "Teddy Roosevelt",
    text: "Do what you can, where you are, with what you have.",
  },
  {
    author: "Confucius",
    text: "Everything has beauty, but not everyone can see.",
  },
];
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
let randomNumber = Math.floor(Math.random() * quotes.length);

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomNumber,
      text: quotes[randomNumber].text,
      author: quotes[randomNumber].author,
      color: randomColor,
    };
    this.handleClick = this.handleClick.bind(this);
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
      text: quotes[randomNumber].text,
      author: quotes[randomNumber].author,
      color: randomColor,
    });
  }
  render() {
    return (
      <div style={{ color: "#" + this.state.color }}>
        <p id="text" className="quote text-center">
          <i className="fa-solid fa-quote-left"></i> {this.state.text}{" "}
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

export default Quote;

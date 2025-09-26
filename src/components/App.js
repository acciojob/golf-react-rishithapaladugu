import React, { Component } from 'react';
import './App.css'; // Assuming you have an App.css for styling

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPosition: 0, // Initial horizontal position
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  buttonClickHandler = () => {
    this.setState({ gameStarted: true });
  };

  handleKeyDown = (event) => {
    if (this.state.gameStarted && event.keyCode === 39) { // ArrowRight key
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  renderChoice = () => {
    if (!this.state.gameStarted) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start Game
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    }
  };

  render() {
    return <div className="App">{this.renderChoice()}</div>;
  }
}

export default App;

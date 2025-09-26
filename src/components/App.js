import React, { Component } from 'react';
import './App.css'; // Assuming you have some basic CSS for .start and .ball

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPositionX: 0,
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
        ballPositionX: prevState.ballPositionX + 5,
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
          style={{ left: `${this.state.ballPositionX}px` }}
        ></div>
      );
    }
  };

  render() {
    return <div className="golf-game-container">{this.renderChoice()}</div>;
  }
}

export default GolfGame;

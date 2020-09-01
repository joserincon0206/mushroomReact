import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';


// import NonCitrus from './frutas'

import * as serviceWorker from './serviceWorker';
// Redux:
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: 'Buena Suerte',
      toDoList: [], 
      diceOnePath: "images/dice6.png", 
      diceTwoPath: 'images/dice6.png', 
      messageWinner: 'Buena Suerte 😊'
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage1 = "dice" + randomNumber1 + ".png";
    let randomImageSource1 = "images/" + randomDiceImage1;
    let randomDiceImage2 = "dice" + randomNumber2 + ".png";
    let randomImageSource2 = "images/" + randomDiceImage2;
    this.setState({
      diceOnePath: randomImageSource1, 
      diceTwoPath: randomImageSource2
    });

    if (randomNumber1> randomNumber2){
      this.setState({
        messageWinner: "🚩 Jugador 1 Gana!"
      });
    }
    else if (randomNumber1 <  randomNumber2){
      this.setState({
        messageWinner: "Jugador 2 Gana! 🚩"
      });
    }
    else{
      this.setState({
        messageWinner: "Empate 😮"
      });

    }


  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here
    return (

      <div>
        <div class="container">
          <h1> Jose Tira los dados!</h1>
          <h1>{this.state.messageWinner}</h1>
          <div class="dice">
            <p> Player 1</p>
            <img class="img1" src={this.state.diceOnePath}></img>
          </div>
          <div class="dice">
            <p> Player 2</p>
            <img class="img2" src={this.state.diceTwoPath}></img>
          </div>
        </div>
        <button class="button" onClick={this.handleSubmit}>Roll the Dice!</button>
        <ul>
          {items}
        </ul>

      </div>
    );
  }
};

ReactDOM.render(<MyToDoList/>, document.getElementById("root"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

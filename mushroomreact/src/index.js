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
      userInput: '',
      toDoList: []
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here
    return (

      <div>
        <div class="container">
          <h1> Refresh Me </h1>
          <div class="dice">
            <p> Player 1</p>
            <img class="img1" src="images/dice1.png"></img>
          </div>
          <div class="dice">
            <p> Player 2</p>
            <img class="img2" src="images/dice4.png"></img>
          </div>
        </div>
        <h1>My "To Do" List:</h1>
        <button onClick={this.handleSubmit}>Roll the Dice!</button>
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

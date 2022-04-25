import React, {PureComponent} from "react";
import ReactDOM from "react-dom";
import "./App.css";



class IncrementDecrement extends PureComponent {
    state = {
      counter: 0,
    }
  
    IncrementItem = () => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    DecrementItem = () => {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  
    render() {
      return (
        <div className="App">

          <h1>Class Component Practice</h1>
          
          <h6>This number is: {this.state.counter}</h6>

          <button onClick={this.IncrementItem}>+</button>

          <button onClick={this.DecrementItem}>-</button>

        </div>
      );
    }
}
  
const rootElement = document.getElementById("root");
ReactDOM.render(<IncrementDecrement />, rootElement);





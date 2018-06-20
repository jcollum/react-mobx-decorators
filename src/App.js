import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  @observable counter = 0;

  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <button onClick={this.onDecrement} type="button">
            Decrement
          </button>
        </div>
        <div>{this.counter}</div>
      </div>
    );
  }
}

export default App;

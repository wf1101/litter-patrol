import React, { Component } from 'react';
import './App.css';
import Trash from './components/Trash.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

  startGame() {
		// when start game, every 1.5 seconds, visible bins will change because this.getBinsState()
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

  getBinsState() {
		//  this function create a bins array to hold visible bins under
    let bins = [];
    for (let i = 0; i < 9; i++){
			// console.log(i);
			let bin = { isTrashVisible: (Math.round(Math.random()) ? true : false )};
      bins.push(bin);
    }

    return bins;
  }

  onTrashClicked = () => {
    // Fill this in!
		this.setState({
			points: this.state.points + 1
		})
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash key={`trash-${index}`} isTrashVisible={ bin.isTrashVisible }
				onTrashClicked={ this.onTrashClicked } binIndex={ index } />
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;

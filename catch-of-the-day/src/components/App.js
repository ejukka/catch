import React from 'react';
import Header from './Header'
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        //getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish){
        //you can do this, but it is not recomended
        //this.state.fishes.fish1 = fish;

        const fishes = {...this.state.fishes};
        const timestamp = Date.now();

        fishes[`fish-${timestamp}`] = fish;
        this.setState({ fishes });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Automatisoi kaiken"/>
                <ul>
                   {
                       Object.
                       keys(this.state.fishes)
                   .map(key => <Fish key={key} details={this.state.fishes[key] } />)
                
                   }
                </ul>
            </div>
            <Order /> 
            <Inventory addFish={ this.addFish } loadSamples={ this.loadSamples} />
        </div>
        )
    }
}

export default App;
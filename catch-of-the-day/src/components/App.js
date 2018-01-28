import React from 'react';
import Header from './Header'
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);

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

    render() {
        return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Automatisoi kaiken"/>
            </div>
            <Order />
            <Inventory addFish={ this.addFish } />
        </div>
        )
    }
}

export default App;
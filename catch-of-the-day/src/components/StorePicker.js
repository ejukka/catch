import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

   /*  constructor(){
        super();
        this.gotoStore = this.gotoStore.bind(this);
    } */



    gotoStore(event) {
        event.preventDefault();

        console.log(this.storeInput.value);

    
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e)=> this.gotoStore(e)}> 
                <h2>Please input a store</h2> 
                <input type="text" required placeholder="Store name" 
                    defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
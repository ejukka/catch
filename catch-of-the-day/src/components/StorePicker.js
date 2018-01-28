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
                <p>Please input a store</p> 
                <input type="text" required placeholder="Store name" 
                    defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
import React from 'react';
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js';
import CartItems from './CartItems.js';
import AddItem from './AddItem.js';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
              products: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
            ],
            cartListItems : [
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
            ]
        };

    };
   submitItem = (item) => {
     console.log(item);
    return item;
  };

  render() {

      let {cartListItems, products} = this.state;
      return (
          <div className="App">
            <CartHeader/>
            <CartItems cartListItems={cartListItems}/>
            <AddItem products={products} submitItem={this.submitItem}/>
            <CartFooter copyright={'2016'}/>
          </div>
      );
  }
}

export default App;

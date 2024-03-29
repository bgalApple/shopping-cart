import React, {Component} from 'react';
import CartItem from './CartItem.js'

export default class CartItems extends Component {
    render() {

        let {cartListItems} = this.props;

        let renderedCartItems = cartListItems.map(item => {

           return (<CartItem key={item.id} item={item}/>);
        });

        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    {renderedCartItems}
                </div>
            </div>
        );
    }
}

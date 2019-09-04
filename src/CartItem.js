import React, {Component} from 'react';





export default class CartItem extends Component {

    render() {

        let {product, quantity} = this.props.item;

        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{product.name}</div>
                    <div className="col-md-2">{product.priceInCents}</div>
                    <div className="col-md-2">{quantity}</div>
                </div>
            </div>
        );
    }
}


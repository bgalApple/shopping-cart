import React, {Component} from 'react';





export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity: 0, selectedProduct : {}};

        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeProduct = this.handleChangeProduct.bind(this);

    }

    handleChangeQuantity(event) {
        this.setState({quantity: event.target.value});
    }
    handleChangeProduct(event) {
        this.setState({product: event.target.value});
    }


    render() {
        let {products, submitItem} = this.props;
        let {product, quantity} = this.state;
        let options = products.map(product => (<option key={product.id} value={product}>{product.name}</option>))
         options = [<option value={-1}>Select A Option...</option>, ...options]
        return (
                <div >
                    <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantityInput" value={quantity} onChange={this.handleChangeQuantity}/>
                    </div>
                    <div className='form-group'>
                        <label for="Products">Product</label>
                        <select value={this.state.product} onChange={this.handleChangeProduct}>
                            {options}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitItem(product)} >Submit</button>
                </div>

    );
    }
}


import React, {Component} from 'react';





export default class CartFooter extends Component {

    render() {
        let {copyright} = this.props

        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">&copy; {copyright}</a>
            </nav>
        );
    }
}


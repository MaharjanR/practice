import React, { Component } from 'react';
import Search from './Search';
import Product from './Product';

class FilterableProductTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: this.props.products,
            checkStock: false,
            searchInput: ''
        }
    }

    changeStock= (stockValue) => {
        this.setState({checkStock: stockValue})
    }

    searchProduct = (name,value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Search searchProduct={this.searchProduct} changeStock={ this.changeStock } checkStock={this.state.checkStock} searchInput={this.state.searchInput} />
                <Product searchInput={this.state.searchInput} stock={this.state.checkStock} products={this.state.products} />
            </div>
        )
    }
}

export default FilterableProductTable

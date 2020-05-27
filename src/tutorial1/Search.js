import React, { Component } from 'react'

export class Search extends Component {

    checkValue = (e) => {
        this.props.changeStock(e.target.checked);
    }

    searchInput = (e) => {
        let {name, value} = e.target;
        this.props.searchProduct(name,value);
    }

    render() {
        return (
            <div>
                <input name="searchInput" onChange={this.searchInput} type="text" placeholder='Search...' value={this.props.searchInput} />
                <p>
                    <input checked={ this.props.checkStock } type="checkbox" onChange={ this.checkValue }  />
                    { }
                    Only show products in stock
                </p>
            </div>
        )
    }
}

export default Search

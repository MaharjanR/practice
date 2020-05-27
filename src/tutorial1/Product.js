import React, { Component } from 'react'

class Product extends Component {


    render() { 
        const rows = [];
        let prevProduct = '';
        const { searchInput } = this.props;
        console.log(searchInput);
        let categoryId = 100;
        this.props.products.forEach((element,i) => {
            if( i === 0 || element.category !== prevProduct.category){
                rows.push(<tr key={categoryId}><th colSpan="2">{element.category}</th></tr>);
                categoryId--;
            }

            if(element.name.toLowerCase().includes(searchInput)){
                if(this.props.stock === true){
                    if(element.stocked === true){
                        rows.push(<tr key={i}><td>{element.name}</td><td>{element.price}</td></tr>)
                    }
                }else{
                    rows.push(<tr key={i}><td>{element.name}</td><td>{element.price}</td></tr>)
                }
            }
            prevProduct = element;
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product

import React from 'react';
import './App.css';
// import Counter from './RenderProps/Counter';
// import ClickCounter from './RenderProps/ClickCounter';
// import HoverCounter from './RenderProps/HoverCounter';
// import Counter from './HOC/Counter'
// import HoverCounter from './HOC/HoverCounter'; 
import FilterableProductTable from './tutorial1/FilterableProductTable';

function App() {

  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  
  return (
    <div className="App">
      {/* Higher Order Component */}
      {/* <Counter name="Ritesh" />
      <HoverCounter /> */}
      {/* Render Props */}
      {/* <Counter>{ (count, increment) => <ClickCounter count={count} increment={increment} />}</Counter> 
      <Counter>{ (count, increment) => <HoverCounter count={count} increment={increment} />}</Counter> */}
      {/* Render props with render variable */}
      {/* <Counter render= { (count, increment) => <HoverCounter count={count} increment={increment} />} /> */}
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Counter from './RenderProps/Counter';
import ClickCounter from './RenderProps/ClickCounter';
import HoverCounter from './RenderProps/HoverCounter';
// import Counter from './HOC/Counter'
// import HoverCounter from './HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      {/* <Counter name="Ritesh" />
      <HoverCounter /> */}
      <Counter>{ (count, increment) => <ClickCounter count={count} increment={increment} />}</Counter> 
      {/* <Counter render= { (count, increment) => <HoverCounter count={count} increment={increment} />} /> */}
      <Counter>{ (count, increment) => <HoverCounter count={count} increment={increment} />}</Counter>
    </div>
  );
}

export default App;

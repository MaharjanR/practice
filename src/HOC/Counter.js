import React, { Component } from 'react';
import withCounter from '../withContext'

class Counter extends Component{

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     };
    //     this.inc = this.inc.bind(this)
    // }

    // function needs to be binded in the state as only arryow functions get binded automatically
    // inc(){
    //     this.setState( function(prevState){
    //         return { 
    //             count: prevState.count +1 
    //         }
    //     })
    // }

    // increment = () => {
    //     this.setState( prevState => {
    //         return {
    //             count: prevState.count + 1 
    //         }
    //     });
    // }
    

    render(){
        console.log(this.props.name);
        const { count, increment } = this.props;
        return(
            <button onClick={ increment }>Clicked me {count} times</button>
        )
    }
}

export default withCounter(Counter);
import React, { Component } from 'react';
import withCounter from '../withContext'

class HoverCounter extends Component {

    // constructor(props){
    //     super(props)

    //     this.state = { 
    //         count: 0 
    //     }
    // }
    
    // increment = () => {
    //     this.setState( state => { 
    //         return { 
    //             count: state.count + 1
    //          }
    //     })
    // }

    render() {
        const { count, increment } = this.props;
        return (
            <div>
                <h1 onMouseOver={increment}>Hovered me {count} times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter);

import React from 'react'


const withCounter = WrappedComponent => {
    class WithCounter extends React.Component{

        constructor(props){
            super(props)
    
            this.state = { 
                count: 0 
            }
        }
        
        increment = () => {
            this.setState( state => { 
                return { 
                    count: state.count + 1
                 }
            })
        }

        render(){
            console.log(this.props.name);
            return (
                <WrappedComponent 
                    {...this.props}
                    increment={this.increment} 
                    count={this.state.count} 
                />
            )
        }
    }
    return WithCounter;
}


export default withCounter;
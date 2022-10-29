import React, { Component } from 'react'

class DisplayBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>{this.props.displayBar}</h1>
            </React.Fragment>
        );
    }
}
 
export default DisplayBar;
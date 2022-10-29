import React, { Component } from 'react'

class Block extends Component {
    state = {  } 

    render() { 
        return (
            <React.Fragment>
                <button className={this.getButtonClass(this.props.displayValue)} onClick={ () => {this.props.onButtonClick(this.props.displayValue)}}>{this.props.displayValue}</button>
            </React.Fragment>
        );
    }

    getButtonClass(displayValue){
        const orangeClasses = ['=', '+', '-', 'X', '/']
        let buttonClass = "btn m-1 btn-";
        return buttonClass += orangeClasses.includes(displayValue) ? "warning" : "secondary"
    }
}
 
export default Block;
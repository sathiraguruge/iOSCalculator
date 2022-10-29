import './App.css';
import Block from './component/block';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import DisplayBar from './component/displayBar';

export default class App extends Component {
  state = {
    numbers: [
      { id: 1, displayValue: '0' },
      { id: 2, displayValue: '.' },
      { id: 3, displayValue: '=' },
      { id: 4, displayValue: '1' },
      { id: 5, displayValue: '2' },
      { id: 6, displayValue: '3' },
      { id: 7, displayValue: '+' },
      { id: 8, displayValue: '4' },
      { id: 9, displayValue: '5' },
      { id: 10, displayValue: '6' },
      { id: 11, displayValue: '-' },
      { id: 12, displayValue: '7' },
      { id: 13, displayValue: '8' },
      { id: 14, displayValue: '9' },
      { id: 15, displayValue: 'X' },
      { id: 16, displayValue: 'AC' },
      { id: 17, displayValue: '+/-' },
      { id: 18, displayValue: '%' },
      { id: 19, displayValue: '/' },
    ],
    displayBar: "0"
  }

  render() {
    return (
      <React.Fragment>
        <DisplayBar displayBar={this.state.displayBar} />
        {this.renderButtons()}
      </React.Fragment>
    );
  }

  renderButtons() {
    return (
      <table>
        <tr>
          {this.state.numbers.map((element) => {
            if (element.id > 15 && element.id <= 19)
              return <Block key={element.id} displayValue={element.displayValue} onButtonClick={this.handleButtonClick} />
          })}
        </tr>
        <tr>
          {this.state.numbers.map((element) => {
            if (element.id > 11 && element.id <= 15)
              return <Block key={element.id} displayValue={element.displayValue} onButtonClick={this.handleButtonClick} />
          })}
        </tr>
        <tr>
          {this.state.numbers.map((element) => {
            if (element.id > 7 && element.id <= 11)
              return <Block key={element.id} displayValue={element.displayValue} onButtonClick={this.handleButtonClick} />
          })}
        </tr>
        <tr>
          {this.state.numbers.map((element) => {
            if (element.id > 3 && element.id <= 7)
              return <Block key={element.id} displayValue={element.displayValue} onButtonClick={this.handleButtonClick} />
          })}
        </tr>
        <tr>
          {this.state.numbers.map((element) => {
            if (element.id <= 3)
              return <Block key={element.id} displayValue={element.displayValue} onButtonClick={this.handleButtonClick} />
          })}
        </tr>
      </table>
    )
  }

  handleButtonClick = (id) => {
    let exisitngBarValue = this.state.displayBar;
    let newValue;
    if (id == 'AC') {
      newValue = 0;
    } else if (id == '=') {
      newValue = this.handleCalculation()
    } else {
      newValue = exisitngBarValue + id;
    }
    this.setState({ displayBar: newValue })
  }

  handleCalculation() {
    
  }
}
import React, { Component } from 'react';

class Calculate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oneNumber: '',
            twoNumber: '',
            resultValue: '',
            logicalExpression: '%'
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {

        event.preventDefault();

        console.log(this.state.oneNumber, this.state.twoNumber);

        this.setState({
            oneNumber: Number(event.target.value),
            twoNumber: Number(event.target.value),
            logicalExpression: event.target.innerText,
            resultValue: this.state.oneNumber + this.state.logicalExpression + this.state.twoNumber
        });
    }

    render() {
        return (
            <form className="calculate-css">
                <h2>Калькулятор на React</h2>
                <div className="logic">
                    <button onClick={this.inputChange}>+</button>
                    <button onClick={this.inputChange}>-</button>
                    <button onClick={this.inputChange}>/</button>
                    <button onClick={this.inputChange}>*</button>
                </div>
                <div className="calculate">
                    <input type="text" placeholder="Первое число" onChange={this.inputChange} value={this.state.oneNumber} />
                    <span id="activeButton">{this.state.logicalExpression}</span>
                    <input type="text" placeholder="Второе число" onChange={this.inputChange} value={this.state.twoNumber} />
                </div>
                <div>
                    <input type="text" placeholder="Результат" value={this.state.resultValue} disabled />
                </div>
            </form>
        );
    }
}

export default Calculate;
import React, { Component } from 'react';

class Calculate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                oneNumber: '',
                twoNumber: ''
            },
            result: {
                resultValue: ''
            },
            buttons: {
                pluses: '+',
                minus: '-',
                multiplication: '*',
                division: '/'
            },
            logicalExpression: '%'
        };
        this.inputChange = this.inputChange.bind(this);
        this.clearTags = this.clearTags.bind(this);
    }

    inputChange(event) {
        event.preventDefault();

        let text = '';

        console.log(this.state.oneNumber, this.state.twoNumber);

        switch(this.state.logicalExpression) {
            case '+':
                text = this.state.oneNumber + this.state.twoNumber;
                break;
            case '-':
                text = this.state.oneNumber - this.state.twoNumber;
                break;
            case '*':
                text = this.state.oneNumber * this.state.twoNumber;
                break;
            case '/':
                text = this.state.oneNumber / this.state.twoNumber;
                break;
        }

        this.setState({
            inputs: event.target.value,
            logicalExpression: event.target.innerText,
            resultValue: text,
            oneNumber: Number(event.target.value),
            twoNumber: Number(event.target.value)
        });
    }

    render() {
        return (
            <form className="calculate-css">
                <h2>Калькулятор на React</h2>
                <div className="logic">
                    <button onClick={this.inputChange}>{this.state.buttons.pluses}</button>
                    <button onClick={this.inputChange}>{this.state.buttons.minus}</button>
                    <button onClick={this.inputChange}>{this.state.buttons.multiplication}</button>
                    <button onClick={this.inputChange}>{this.state.buttons.division}</button>
                </div>
                <div className="calculate">
                    <input type="text" placeholder="Первое число" onChange={this.inputChange} value={this.state.inputs.oneNumber} />
                    <span id="activeButton">{this.state.logicalExpression}</span>
                    <input type="text" placeholder="Второе число" onChange={this.inputChange} value={this.state.inputs.twoNumber} />
                </div>
                <div>
                    <input type="text" placeholder="Результат" value={this.state.result.resultValue} />
                </div>
            </form>
        );
    }
}

export default Calculate;
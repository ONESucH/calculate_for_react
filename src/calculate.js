import React, {Component} from 'react';

class Calculate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inpValOne: '',
            inpValTwo: '',
            result: 'Результат',
            logic: ''
        };

        this.plusFunc = this.plusFunc.bind(this);
        this.minusFunc = this.minusFunc.bind(this);
        this.ymnFunc = this.ymnFunc.bind(this);
        this.delFunc = this.delFunc.bind(this);
        this.changeInpOne = this.changeInpOne.bind(this);
        this.changeInpTwo = this.changeInpTwo.bind(this);
    }

    plusFunc(event) {
        event.preventDefault();
         this.setState({
            result: Number(this.state.inpValOne) + Number(this.state.inpValTwo)
        });
    }
    minusFunc(event) {
        event.preventDefault();
         this.setState({
            result: Number(this.state.inpValOne) - Number(this.state.inpValTwo)
        });
    }
    ymnFunc(event) {
        event.preventDefault();
         this.setState({
            result: Number(this.state.inpValOne) * Number(this.state.inpValTwo)
        });
    }
    delFunc(event) {
        event.preventDefault();
         this.setState({
            result: Number(this.state.inpValOne) / Number(this.state.inpValTwo)
        });
    }

    changeInpOne(event) {
        this.setState({inpValOne: event.target.value});
    }

    changeInpTwo(event) {
        this.setState({inpValTwo: event.target.value});
    }

    render() {
        return (
            <form className="calculate-css">
                <h2>Калькулятор на React</h2>
                <div className="logic">
                    <button onClick={this.plusFunc}>+</button>
                    <button onClick={this.minusFunc}>-</button>
                    <button onClick={this.ymnFunc}>*</button>
                    <button onClick={this.delFunc}>/</button>
                </div>
                <div className="calculate">
                    <input type="text" placeholder="Первое число" onChange={this.changeInpOne} value={this.state.inpValOne} />
                    <input type="text" placeholder="Второе число" onChange={this.changeInpTwo} value={this.state.inpValTwo} />
                </div>
                <div>
                    <input type="text" placeholder="Результат" value={this.state.result}/>
                </div>
            </form>
        );
    }
}

export default Calculate;
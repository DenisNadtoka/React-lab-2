import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Timer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digit: 0,
            color: 'blue'
        };
    }

    handleInc() {
        this.setState(state => ({
            digit: state.digit + 1
        }));
    }
    handleDec() {
        this.setState(state => ({
            digit: state.digit - 1
        }));
    }
    handleRst() {
        this.setState({
            digit: 0
        });
    }
    
    handleClr() {
        this.setState({
            color: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(),
        });
    }

    render() {
        return (
            <>
                <h1 style={{color: this.state.color}}>{this.state.digit}</h1>
                <Button variant="primary" onClick={() => { this.handleInc(); }}>+</Button>{' '}
                <Button variant="danger" onClick={() => { this.handleDec(); }}>-</Button>{' '}
                <Button variant="success" onClick={() => { this.handleRst(); }}>Reset</Button>{' '}
                <Button variant="warning" onClick={() => { this.handleClr(); }}>Color</Button>{' '}
            </>
        )
    }

}

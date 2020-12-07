import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digit: 0
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState(state => ({
            digit: state.digit + 1
        }));
    }







    render() {
        return (
            <>
                <h1>{this.state.digit}</h1>
            </>
        )
    }
}

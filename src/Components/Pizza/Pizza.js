import React, { Component } from 'react'
import { Card, Button, Form } from "react-bootstrap"
import PizzaData from '../../data/data.json'

export default class Pizza extends Component {
    constructor(props){
        super(props);
        this.state ={
            size: "32 см",
            price: PizzaData.pizzas[this.props.id].price32
        };
    }

    changeSize(){
        if(this.state.size === "32 см"){
            this.setState({
                size: "42 см",
                price: PizzaData.pizzas[this.props.id].price42
            });
        }
        else {
            this.setState({
                size: "32 см",
                price: PizzaData.pizzas[this.props.id].price32
            }); 
        }
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PizzaData.pizzas[this.props.id].img} />
                <Card.Body>
                    <Card.Title>{PizzaData.pizzas[this.props.id].title}</Card.Title>
                    <Card.Text>{PizzaData.pizzas[this.props.id].ingredients}</Card.Text>
                    <Form>
                            <Form.Check
                                type="switch"
                                id={PizzaData.pizzas[this.props.id].id}
                                label={this.state.size}
                                onChange={() => {
                                    this.changeSize();
                                }}
                            />
                        </Form>
                    <Button variant="primary">Купить</Button>
                    <Card.Title style={{ float: "right"}}>{this.state.price}</Card.Title> 
                </Card.Body>
            </Card>
        )
    }
}


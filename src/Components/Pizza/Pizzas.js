import React from 'react'
import Pizza from "./Pizza"
import PizzaData from "../../data/data.json"
import { Container, CardColumns } from "react-bootstrap"

export default function Pizzas() {
    return (
        <Container>
            <CardColumns>
                {PizzaData.pizzas.map((pizza, index) =>{
                    return <Pizza key={index} id={index} />
                })}
            </CardColumns>
        </Container>
    )
}

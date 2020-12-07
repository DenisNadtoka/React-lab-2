import React from 'react'
import { Container } from 'react-bootstrap'
import Timer from '../Components/Timer'
import Timer2 from '../Components/Timer2'
import Pizzas from "../Components/Pizza/Pizzas"

export default function Contacts() {
    return (
        <Container>
            <Timer />
            <Timer2 />
            <Pizzas />
        </Container>
    )
}

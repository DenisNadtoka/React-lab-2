import React from 'react'
import { Container } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron'
import PostData from '../data/data.json'


export default function Post(props) {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{PostData.news[props.id].title}</h1>
                <p>{PostData.news[props.id].content}</p>
                <p>{PostData.news[props.id].date}</p>                 
            </Container>
        </Jumbotron>
    )
}

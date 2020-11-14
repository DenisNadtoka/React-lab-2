import React from 'react'
import PostData from '../data/data.json'
import Card from 'react-bootstrap/Card'


export default function Product(props) {
    return (
        <>
            <Card style={{width: "18rem"}}>
                <Card.Img variant="top" src={PostData.products[props.id].img} />
                <Card.Body>
                    <Card.Title>{PostData.products[props.id].title}</Card.Title>
                    <Card.Text>{PostData.products[props.id].price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}



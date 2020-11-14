import React from 'react'
import PostData from '../data/data.json'
import CardDeck from 'react-bootstrap/CardDeck'
import Product from '../Components/Product'


export default function Products() {
    return (
        <>
            <h1>Out Products: </h1>
            <CardDeck>
                {PostData.products.map((products, index) => {
                return <Product key={index} id={index} />
            })}
            </CardDeck>



        </>
    )
}

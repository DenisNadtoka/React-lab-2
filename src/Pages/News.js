import React from 'react'
import Post from '../Components/Post'
import PostData from '../data/data.json'


export default function News() {
    return (
        <>
            <h1>Here Are The News: </h1>
            {PostData.news.map((post, index) => {
                return <Post key={index} id={index} />
            })}
        </>
    )
}

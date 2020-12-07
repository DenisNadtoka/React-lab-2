import React, { Component } from 'react'
import Person from "./Person"

export default class OurTeam extends Component {


    state = {
        loading: true,
        people: []
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=9"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            people: data.results,
            loading: false
        })
    }


    render() {
        if (this.state.loading) {
            return <div>loading..</div>
        }

        return (
            <div className="mt-5">
                <h1> OurTeam</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {this.state.people.map((person, index) => {
                        return <Person
                            key={index}
                            fname={person.name.first}
                            lname={person.name.last}
                            img={person.picture.large}
                        />

                    })}
                </div>
            </div>
        )
    }
}

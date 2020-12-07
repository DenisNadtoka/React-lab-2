import React from 'react'
import { Container } from 'react-bootstrap'
import OurTeam from '../Components/AboutUs/OurTeam'
import EmployeeOfTheMonth from '../Components/AboutUs/EmployeeOfTheMonth'

export default function About() {
    return (
        <Container>
            <EmployeeOfTheMonth />
            <OurTeam />            
        </Container>
    )
}

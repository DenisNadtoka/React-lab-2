import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./logo192.png";
import {
    BrowserRouter as Router,
    Switch,
    Route
} 
from "react-router-dom";
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Home from '../Pages/Home'
import News from '../Pages/News'
import Products from '../Pages/Products'



export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="sm" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"                                
                            />{' '}
                        Home
                    </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/news">News</Nav.Link>
                                <Nav.Link href="/products">Products</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                <Router>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}
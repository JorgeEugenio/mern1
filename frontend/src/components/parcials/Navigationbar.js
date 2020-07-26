import React from 'react'
import Button from 'react-bootstrap/Button'
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import styled from 'styled-components'



const Styles = styled.div`
.navbar {
    background-color: #222;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;

    &:hover {
        color:white;
    }
}
`
const Navigationbar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/Home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </Styles>
)


export default Navigationbar

{/* class Navbar extends React.Component {

    render(){
        return (
            <>
            <nav>hola desde navbar</nav>
            <Button/>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="padding: 3px;" >
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contenido
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="usuario">Usuario</a>
                        <a class="dropdown-item" href="cliente">Cliente</a>
                        <a class="dropdown-item" href="usuario2">Cliente2</a>
                      </div> 
                    </li>
                  </ul>
                </div>
              </nav>
            </>
        )

    }

export default Navbar */}
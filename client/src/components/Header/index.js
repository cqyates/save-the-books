import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <Jumbotron>
      <h1>My Book Finder and Reading List</h1>
      <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/saved">My Books</Nav.Link>
    </Nav.Item>
    
  </Nav>
    </Jumbotron>
  )
}

export default Header;
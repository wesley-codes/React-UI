import React from "react";
import Styled from "styled-components";
import { Navbar, Container, Nav } from "react-bootstrap";

const Styles = Styled.div`
font-family : font-family: 'Montserrat', sans-serif;
font-family: 'Poppins', sans-serif;
letter-spacing: 0.1rem;

.nav__items{
justify-content : end;
}

.navbar-nav .nav-link{
    color:white;
    font-size:0.8em;
    font-weight:600;
  }

 .navbar-expand {
  padding-top:0;
  }
 
.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    background: linear-gradient(180deg, #290321 0%, #030B29 100%);
    border-left: 1.5px solid #ADADAD;
    border-width: thin;
    border-right: 1.5px solid #ADADAD;
    border-width: thin;
    border-radius: 0px 0px 63.7222px 63.7222px;
    border-top: none;
    height: 90.72px;
    
  }

& a{
 padding:50px;
}

  .nav-link{
    border-radius: 0px 0px 63.7222px 63.7222px;
    
  }

/*   .nav-link{
    padding-top:50%;
  } */
    
  .navbar-expand .navbar-nav {
    width: 60%;
    justify-content: space-between;
}
    

@media only screen and (max-width: 976px) {
  .navbar-expand .navbar-nav {
   
    width: 100%;
    justify-content: space-between;
    text-align:center;
}
}

`;

const Navigation = () => {
  return (
    <Styles>
      <Navbar variant=" pills">
        <Container className="nav__items">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item className="fair">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="linl__pill link-1">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">My Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">My Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Navigation;

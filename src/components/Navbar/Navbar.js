import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from "react-router-dom"


function Header() {
    const tonav=useNavigate()
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={()=>tonav("/")}>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <span onClick={()=>tonav("/top")}>Top</span>
            <span onClick={()=>tonav("/recent")}>Recent</span>
          </Nav>
          
            Login/Register
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;
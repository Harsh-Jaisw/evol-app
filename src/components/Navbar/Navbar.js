import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom"
import Login from '../../Modal/Login/Login';
import Register from '../../Modal/Register/Register';
import Upload from '../../Modal/UploadImage/Upload';


function Header() {
    const tonav=useNavigate()
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={()=>tonav("/home")}>Evol</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', display:"flex",gap:"1rem"}}
            navbarScroll
          >
            <span onClick={()=>tonav("/top")}>Top</span>
            <span onClick={()=>tonav("/recent")}>Recent</span>
            <Upload/>
          </Nav> 
          
        <Login/>/
        <Register/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;
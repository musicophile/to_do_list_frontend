import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
 
   <>
 

      <>
    

      <br />
      <div class="container">

      <div class="row">
      <Navbar bg="light" variant="light">
  <div class="col-sm-6"><p class="float-start"><Navbar.Brand href="/">To-Do List</Navbar.Brand></p></div>  
  <div class="col-sm-6"><p class="float-end"><Nav className="me-auto">
            <Nav.Link className="justify-content-end" href="/login">Login</Nav.Link>
            <Nav.Link className="justify-content-end" href="/register">Register</Nav.Link>
          </Nav></p></div>  
  </Navbar> 
</div>
      </div>
    

     </>

      <Outlet />
    </>
  
  )
};

export default Layout;
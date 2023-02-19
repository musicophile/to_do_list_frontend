import { Switch, Route } from "react-router-dom";
import { Container, Col, Row,Button } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from "./Login";
import Register from "./Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import AddTask from "./pages/AddTask";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import EditTask from "./pages/EditTask";
import Invite from "./pages/Invite";
import TaskDetails from "./pages/TaskDetails";
import Contribute from "./pages/Contribute";
import Collaborator from "./pages/Collaborator";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("isLogged");
const name = cookies.get("name");
const email = cookies.get("email");

function App() {

   // logout
   const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    cookies.set("isLogged", false);
    // redirect user to the landing page 4BB9DA.42A4BF
    window.location.href = "/login";
  }
  return (
    <Container>

        {  token == "true" ? 
        <Navbar bg="light" variant="light">
        <div class="col-sm-6"><p class="float-start"><Navbar.Brand href="/">Todo List</Navbar.Brand></p></div>  
        <div class="col-sm-6"><p class="float-end"><Nav className="me-auto justify-content-end">
                  <h6>{name}<br/>{email}</h6>
                  <Button  className="btn btn-outline-danger m-1" type="submit" variant="white" onClick={() => logout()}>
        Logout
      </Button>
                </Nav></p></div>  
        </Navbar> 
        :  <Navbar bg="light" variant="light">
        <div class="col-sm-6"><p class="float-start"><Navbar.Brand href="/">Todo List</Navbar.Brand></p></div>  
        <div class="col-sm-6"><p class="float-end"><Nav className="me-auto justify-content-end">
                  <Nav.Link className="justify-content-end" href="/login">Login</Nav.Link>
                  <Nav.Link className="justify-content-end" href="/register">Register</Nav.Link>
                </Nav></p></div>  
        </Navbar> }
     

      {/* create routes here */}
      <Switch>
      {/*   token == "true" ?  */}
      <Route exact  path="/"  component={token == "true" ? Home: Login} />

      <Route exact  path="/"  component={AddTask} />
      {/*  : <Route  path="/" component={Login} /> */}
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPassword" component={ForgotPassword } />
          <Route path="/addTask" component={AddTask} />
          <Route path="/contact" component={Contact } />
          <Route path="/editTask" component={EditTask } />
          <Route path="/invite" component={Invite } />
          <Route path="/taskDetails" component={TaskDetails } />
          <Route path="/contribute" component={Contribute } />
          <Route path="/collaborator" component={Collaborator } />
          <Route path="*" element={<NoPage />} />
      </Switch>
    </Container>
  );
}

export default App;

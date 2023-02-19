import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

const history = createBrowserHistory();


const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("inputs");
  // history.push('/')
  window.location.href = "/";

  
  }
  return (
    <div class="container">
      <h1><p class="text-center">Login Page</p></h1>
    <Form onSubmit={handleSubmit} className="float-center m-13">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      {/* <Form.Check type="checkbox" label="Check me out" /> */}
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
    );
};

export default Login;
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'


const cookies = new Cookies();

export default function Login() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    setLoading(true);
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLoading(false);
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        cookies.set("isLogged", true);
        cookies.set("name", result.data.name);
        cookies.set("email", result.data.email);
        // redirect user to the auth page
        window.location.href = "/";

        setLogin(true);
      })
      .catch((error) => {
        setLoading(false);
        error = new Error();
      });
  };

  return (
    <>
      <div class="d-flex justify-content-center"><h2 >Login</h2></div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>
          </div>
          <div class="col-md-3"></div>
        </div>
       

        {/* password */}
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
          </div>
          <div class="col-md-3"></div>
        </div>

        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 d-flex justify-content-center">
             {/* submit button */}
        <Button
           type="button" class="btn btn-outline-primary m-1"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
          </div>
          <div class="col-md-3"></div>
        </div>
       

       
{loading == true?
        <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 d-flex justify-content-center">

 
<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
 </div>
          <div class="col-md-3"></div> </div>:<div></div>}
        {/* display success message */}
        {/* {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )} */}
      </Form>
    </>
  );
}

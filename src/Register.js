import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'


export default function Register() {
  // initial state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    setLoading(true);

    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/register",
      data: {
        email,
        password,
        name,
        mobile,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        setLoading(false);

        window.location.href = "/login";
      })
      .catch((error) => {
        setLoading(false);

        error = new Error();
      });
  };

  return (
    <>
      <div class="d-flex justify-content-center"><h2 >Register</h2></div>
      
      <Form onSubmit={(e) => handleSubmit(e)}>

      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
  {/* name */}
  <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
  {/* email */}
  <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address.</Form.Label>
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
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
  {/* email */}
  <Form.Group controlId="formBasicEmail">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
          />
        </Form.Group>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
   {/* password */}
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
          Register
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
        {/* {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )} */}
      </Form>
    </>
  );
}

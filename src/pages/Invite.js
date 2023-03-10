import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import axios from "axios";

import Cookies from "universal-cookie";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'

const cookies = new Cookies();

// get token generated on login
const c_email = cookies.get("email");
const name = cookies.get("name");

const taskId = cookies.get("taskId");
const taskname = cookies.get("taskname");



const history = createBrowserHistory();


const Invite = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  

  const handleSubmit = (event) => {
    setLoading(true);

    event.preventDefault();

    const date = new Date();
    const id = date.getMilliseconds()+date.getSeconds()+date.getMinutes()+date.getHours()+date.getDate()+date.getMonth();
    console.log(date.getMilliseconds()+date.getSeconds()+date.getMinutes()+date.getHours()+date.getDate()+date.getMonth());
    console.log(id);
    console.log(taskname);
    //set configurations
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/invite",
      data: {
        c_email,
        taskId,
        email,
        id,
        taskname,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setLoading(false);

        window.location.href = "/";

      })
      .catch((error) => {
        setLoading(false);

        error = new Error();
      });
 
    emailjs.send(
      'service_p31kmpu', 'template_5z6cxiu',
      {message: 'Your Invited to colaborate on this task : '+taskname +", Open this link to register: https://to-do-list-frontend-neon.vercel.app/ ",  from_name: name, reply_to: email},'CkrwYIDAgsKZBvekT'
      ).then(res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))

  // window.location.href = "/";
  
  }

 

  return (
    <>
      <h2>Invite Collaborator</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
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

      

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>

      
      </Form>
      {
loading == true?
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
    </>
    );
};

export default Invite;
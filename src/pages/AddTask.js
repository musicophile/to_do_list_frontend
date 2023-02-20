import React, { useState } from "react";
import { Form, Button, Select } from "react-bootstrap";

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import Select from 'react-bootstrap/Select';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import axios from "axios";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'


import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const email = cookies.get("email");
const name = cookies.get("name");

const AddTask = () => {
  // initial state
  const [taskname, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [loading, setLoading] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const date = new Date();
    const id = date.getMilliseconds()+date.getSeconds()+date.getMinutes()+date.getUTCHours()+date.getDate()+date.getMonth();
    console.log(id);
    //set configurations
    const taskDescription = "->" + name + " : " + description;
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/registertTask",
      data: {
        taskname,
        taskDescription,
        priority,
        status,
        id,
        email,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        setLoading(false);
        window.location.href = "/";

      })
      .catch((error) => {
        error = new Error();
      });


  
  }
  return (
    <div class="container">
 <>
      <h2>Register Task</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            name="taskname"
            value={taskname}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>



     
     <Form.Group>
    <Form.Label>Status</Form.Label>
    <Form.Control as="select" value={priority}
      name="priority"
      onChange={(e) => setPriority(e.target.value)}>
    <option selected>Select Priority</option>
        <option value="1">High</option>
        <option value="2">Moderate</option>
        <option value="3">Low</option>
    </Form.Control>
  </Form.Group>

      

        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 d-flex justify-content-center">
             {/* submit button */}
        <Button
           type="button" class="btn btn-outline-primary m-1"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
          </div>
          <div class="col-md-3"></div>
        </div>
      </Form>
    </>
 

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
</div>
    );
};

export default AddTask;
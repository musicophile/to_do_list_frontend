import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'
import Cookies from "universal-cookie";

const cookies = new Cookies();
const email = cookies.get("email");
const name = cookies.get("name");

const history = createBrowserHistory();


const EditTask = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [taskname, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [sdescription, setSdiscription] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [priority, setPriority] = useState("");
  // prevent the form from refreshing the whole page

  const taskId = cookies.get("taskId");
  const email = cookies.get("email");
  const taskemail = cookies.get("taskemail");
  console.log(taskId);
  console.log(taskemail);
  if( data == ""){
  const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/fetchTaskById",
      data: {
        taskId,
        taskemail,
      },
    };
    
    axios(configuration)
    .then((result) => { 
      console.log(result.data.result[0].description);
      setDescription(result.data.result[0].description)
      setTask(result.data.result[0].taskname)
      setData(result.data.result);
      console.log(data);
      setLoading(false);
     
    })
    .catch((error) => {
      error = new Error();
      setLoading(false);
    });
    console.log("description");
    console.log(description);
    console.log(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(description);
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/editTask",
      data: {
        taskId,
        description,
        taskemail,
        taskname,
        priority,
        status,
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

  
  }
  return (
    <div class="container">
<>
{data.map(d => (
  <div>
      <h2>Edit Task</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            name="taskname"
            value={taskname}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={d.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group> */}

        <div class="row">
    
<div class="col-md-12">
<label for="description">Description</label>
<textarea class="form-control"  onChange={(e) => setDescription(e.target.value)} name="description" value={description} id="description" rows="3"></textarea>
</div>
        </div>



     
     <Form.Group>
    <Form.Label>Select Priority</Form.Label>
    <Form.Control as="select" value={priority}
      name="priority"
      onChange={(e) => setPriority(e.target.value)}>
    <option selected>Select Priority</option>
        <option value="1">High</option>
        <option value="2">Moderate</option>
        <option value="3">Low</option>
    </Form.Control>
  </Form.Group>

  <Form.Group>
    <Form.Label>Status</Form.Label>
    <Form.Control as="select" value={status}
      name="status"
      onChange={(e) => setStatus(e.target.value)}>
    <option selected>Select Status</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
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
      </div>
      )) 
    }
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
</div>
    );
};

export default EditTask;
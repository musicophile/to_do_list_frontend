import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'

const cookies = new Cookies();
const email = cookies.get("email");
const name = cookies.get("name");


const history = createBrowserHistory();


const Contribute = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [taskname, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [sdescription, setSdescription] = useState("");
  const [status, setStatus] = useState("Incomplete");
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
 
    const taskDescription = description + " ->" + name + " : " + sdescription;
    console.log(description);
    console.log(taskDescription);
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/updateTask",
      data: {
        taskId,
        taskDescription,
        taskemail,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        // cookies.set("TOKEN", result.data.token, {
        //   path: "/",
        // });
        // cookies.set("isLogged", true);
        // redirect user to the auth page
        window.location.href = "/";

      })
      .catch((error) => {
        error = new Error();
      });


  
  }


  return (
    <div class="container">
{data.map(d => (
  <div className="Auth-form-container">
    <Form onSubmit={(e) => handleSubmit(e)}>
        <input type="hidden" name="description" onChange={(e) => setDescription(d.description)} />
    <div className="Auth-form-content">
      <h3 className="Auth-form-title text-center">Contribute</h3>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title"><div class="shadow p-3 mb-2 bg-white rounded">{d.taskname}</div>
</h5>
    <h6 class="card-subtitle mb-1 text-muted">
      <div class="row">
        <div class="col-md-6"><div class="shadow-sm p-3 mb-1 bg-white rounded"><strong>Priority:</strong>{d.priority == "1"?"High": d.priority == "2" ? "Medium":"Low" }</div></div>
        <div  class="col-md-6"><div class="shadow-sm p-3 mb-1 bg-white rounded"><strong>Status:</strong>{d.status}</div></div>
      </div>
    </h6>
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Items List</h5>
    <div class="row"><div class="shadow-sm p-3 mb-1 bg-white rounded">{d.description}</div></div>
    <div class="row">
    <label for="description">Add Your Contribution</label>

        <textarea class="form-control"  onChange={(e) => setSdescription(e.target.value)} name="sdescription" placeholder="Enter Your contribution here"  id="sdescription" rows="3"></textarea>
        </div>
  </div>
</div>
  </div>
</div>
    
   
  
    </div>

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
</div>
    );
};

export default Contribute;
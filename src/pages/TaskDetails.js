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


const history = createBrowserHistory();


const TaskDetails = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
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
      console.log(result.data.result);
      setData(result.data.result);
      console.log(data);
      setLoading(false);
    })
    .catch((error) => {
      error = new Error();
      setLoading(false);
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("inputs");
  // history.push('/')
  window.location.href = "/login";

  
  }
  return (
    <div class="container">
{data.map(d => (
  <div className="Auth-form-container">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title text-center">Task Details</h3>
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
    
  </div>
</div>
  </div>
</div>
    
   
  
    </div>
    <a href="/"  type="button" class="btn btn-outline-warning  m-1">Back</a>
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

export default TaskDetails;
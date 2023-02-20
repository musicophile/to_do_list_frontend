import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { FallingLines,Bars ,Grid,Oval,ThreeCircles} from 'react-loader-spinner'

const cookies = new Cookies();


// get token generated on login
const c_email = cookies.get("email");

const Home = () => {


  const [data, setData] = useState([]);

  const [inviteData, setInviteData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");


  // prevent the form from refreshing the whole page
  // event.preventDefault();
  const email = cookies.get("email");
  if( data == ""){
    const configuration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/fetchTask",
      data: {
        email
      },
    };
    
    axios(configuration)
    .then((result) => { 
      console.log(result.data.result);
      console.log(email);
      setData(result.data.result);
      setLoading(false);
 
    })
    .catch((error) => {
      error = new Error();
      setLoading(false);
    });

    const inviteConfiguration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/fetchInviteTask",
      data: {
        email
      },
    };
    
    axios(inviteConfiguration)
    .then((result) => { 
      console.log(result.data.result);
      
      setInviteData(result.data.result);
 
    })
    .catch((error) => {
      error = new Error();
    });
    
  }

  const handleSubmitEdit = (event,id,email) => {
    event.preventDefault();
    cookies.set("taskId", id);
    cookies.set("taskemail", email);
  window.location.href = "/editTask";
  }

  const handleSubmitInvite = (event,id,taskname) => {
    event.preventDefault();
    cookies.set("taskId", id);
    cookies.set("taskname", taskname);
      window.location.href = "/invite";
  }

  const handleContribute = (event,id,email_) => {
    event.preventDefault();
    cookies.set("taskId", id);
    cookies.set("taskemail", email_);
      window.location.href = "/contribute";
  }

  const handleSubmitView = (event,id,email_) => {
    event.preventDefault();
    cookies.set("taskId", id);
    cookies.set("taskemail", email_);
    
  window.location.href = "/taskDetails";
  }

  const handleSubmitStatus = (event,taskId,taskemail,status_) => {
    event.preventDefault();
    // const taskId = taskId; // replace with actual task ID
    // const taskemail = taskemail; // replace with actual task email
    let newstatus = "";
    console.log(status_);
    if (status_ === "Complete") {
      newstatus = "Incomplete";
    } else {
      newstatus = "Complete";
    }
    console.log(newstatus);
    const statusConfiguration = {
      method: "post",
      url: "https://vivacious-cod-capris.cyclic.app/updateTaskStatus",
      data: {
        taskId,
        taskemail,
        newstatus
      },
    };
    axios(statusConfiguration)
      .then((result) => {
        console.log(result.data.result);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
    // const configuration = {
    //   method: "post",
    //   url: "https://vivacious-cod-capris.cyclic.app/editTaskStatus",
    //   data: {
    //     taskId,
    //     taskemail,
    //     status,
    //   },
    // };

    // // make the API call
    // axios(configuration)
    //   .then((result) => {
    //     console.log(result.data.result);
    //     setLoading(false);
    //     window.location.href = "/";

    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     error = new Error();
    //     console.log(error);
    //   });
  // window.location.href = "/taskDetails";
  }

  const collaborator = (event) => {
    event.preventDefault();
  window.location.href = "/collaborator";
  }
   const handleSubmitSearch = (event) => {
    event.preventDefault();
    alert("Work on Progress, Expected to be completed by the end of today");
  }

    return ( 
        <>
    

<div class="container mt-3">

<div class="row">
<div class="col-md-6 mt-1"><p class="float-start">
<a href="addTask" type="button" class="btn btn-outline-primary">Add Task</a>
    </p></div>  
<div class="col-md-6"><p class="float-end">
    <form>
           <div class="input-group ">
  <input className="form-control mt-1" type="text" class="form-control" placeholder="Search Task" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={(e) => handleSubmitSearch(e)} type="button">Search</button>
  </div>
</div>
    </form>
    </p></div>  
</div>
</div>
<div class="container">
<h5 class="card-title"><div class="shadow-sm p-2 mb-1 mt-1 left bg-white rounded">Your Task</div></h5> 
{

data.map(d => (
<div class="card border-warning mb-3 shadow-sm  bg-white rounded" >

  <div class="card-body">
      <div class="row">
        <div class="col-md-8">
        <p><strong>#1. </strong>{d.taskname}<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Priority:</strong> {d.priority == 1? "High":d.priority == 2?"Medium":"Low"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Status:</strong> {d.status}</p>
        </div>
        <div class="col-md-4">
        <a href="#" onClick={(e) => handleSubmitEdit(e,d.id,d.email)} type="button" class="btn btn-outline-success m-1">Edit</a>
      <a href="#"  onClick={(e) => handleSubmitInvite(e,d.id,d.taskname)}  type="button" class="btn btn-outline-primary  m-1">Invite</a>
      
      <a href="#" onClick={(e) => handleSubmitView(e,d.id,d.email)} type="button" class="btn btn-outline-warning  m-1">View</a>
      { d.status == "Complete" ? <a href="#" onClick={(e) => handleSubmitStatus(e,d.id,d.email,d.status)} type="button" class="btn btn-success  m-1">{d.status}</a>:
      <a href="#" onClick={(e) => handleSubmitStatus(e,d.id,d.email,d.status)} type="button" class="btn btn-warning  m-1">{d.status}</a> }
          </div>
      </div>
      
  </div>
</div>


)) 
}
<h5 class="card-title"><div class="shadow-sm p-2 mb-1 mt-1 text-left bg-white rounded">Invited Task</div></h5> 
{

inviteData.map(d => (
<div class="card border-success mb-3 shadow-sm  bg-white rounded" >

  <div class="card-body">
      <div class="row">
        <div class="col-md-8">
        <p><strong>#1. </strong>{d.taskname}<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Priority:</strong> {d.priority == 1? "High":d.priority == 2?"Medium":"Low"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Status:</strong> {d.status}</p>
        </div>
        <div class="col-md-4">
        <a href="#" onClick={(e) => handleSubmitEdit(e,d.taskId,d.c_email)} type="button" class="btn btn-outline-success m-1">Edit</a>
      <a href="#"  onClick={(e) => handleContribute(e,d.taskId,d.c_email)}  type="button" class="btn btn-outline-primary  m-1">Contribute</a>
      
      <a href="#" onClick={(e) => handleSubmitView(e,d.taskId,d.c_email)} type="button" class="btn btn-outline-warning  m-1">View</a>
          </div>
      </div>
      
  </div>
</div>


)) 
}
{data == null ? 

<h5 class="card-title"><div class="shadow p-3 mb-2 mt-5 text-center bg-white rounded">You Don't have any task. Register your Task now!</div>
</h5> : data == "" ?
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
          <div class="col-md-3"></div> </div>:<h5 class="card-title"><div class="shadow p-3 mb-2 mt-5 text-center bg-white rounded">You Don't have any task. Register your Task now!</div>
</h5>  : <div></div> }

   {/* <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Tasks</th>
      <th scope="col">Priority</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

 
  {
        data.map(d => (
          <tr >
          <th  scope="row">{count + 1}</th>
          <td>{d.taskname}</td>
          <td>{d.priority == 1? "High":d.priority == 2?"Medium":"Low"}</td>
          <td>{d.status}</td>
          <td><a href="#" onClick={(e) => handleSubmitEdit(e,d._id)} type="button" class="btn btn-outline-success m-1">Edit</a>
          <a href="#"  onClick={(e) => handleSubmitInvite(e,d._id)}   type="button" class="btn btn-outline-primary m-1">Invite</a>
          <a href="#" onClick={(e) => handleSubmitView(e,d._id)} type="button" class="btn btn-outline-warning m-1">View</a></td>
        </tr>
       
          )) 
          }
    
        
        
     
   


    <tr>
      <th scope="row">2</th>
      <td>To conduct testing</td>
            <td>Medium</td>
      <td>Complete</td>
      <td><a href="#" type="button" class="btn btn-outline-success m-1">Edit</a>
      <a href="#" type="button" class="btn btn-outline-primary m-1">Invite</a>
      
      <a href="taskDetails" type="button" class="btn btn-outline-warning m-1">View</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>To release report for the last two weeks</td>
      <td>Low</td>
      <td>Incomplete</td>
      <td><a href="editTask" type="button" class="btn btn-outline-success m-1">Edit</a>
      <a href="invite" type="button" class="btn btn-outline-primary  m-1">Invite</a>
      
      <a href="taskDetails" type="button" class="btn btn-outline-warning  m-1">View</a></td>
    </tr>
  </tbody>
</table> */}
</div>
     </>);
  };
  
  export default Home;
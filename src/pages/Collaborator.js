import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {withRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

const history = createBrowserHistory();


const Collaborator = () => {
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("inputs");
  // history.push('/')
  window.location.href = "/login";
  
  }
  return (
    <div class="container">

  <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title text-center">Contribute</h3>
      <div className="text-center">
    
      </div>
      <div className="form-group mt-3">
        <label>Task</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="To develop web portal" disabled
        />
      </div>
      <div className="form-group mt-3">
        <label>Description</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Description" disabled
        />
      </div>

      <div className="form-group mt-3">
        <label>Add Other Details </label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Description" 
        />
      </div>
      <div className="form-group mt-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>Select Priority</option>
        <option value="1">High</option>
        <option value="2">Moderate</option>
        <option value="3">Low</option>
        </select>
      </div>
     
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
  
    </div>
  </form>
</div>
</div>
    );
};

export default Collaborator;
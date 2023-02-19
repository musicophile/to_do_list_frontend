

const Register = () => {
  
  return (
    <div class="container">

  <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title text-center">Registration Form</h3>
      <div className="text-center">
    
      </div>
      <div className="form-group mt-3">
        <label>Full Name</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="e.g Jane Doe"
        />
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control mt-1"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group mt-3">
        <label>Phone Number</label>
        <input
          type="phone"
          className="form-control mt-1"
          placeholder="Enter Phone number"
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Password"
        />
      </div>
      <div className="form-group mt-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control mt-1"
          placeholder="Confirm Password"
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="text-center mt-2">
        Forgot <a href="forgotPassword">password?</a>
      </p>
    </div>
  </form>
</div>
</div>);
};

export default Register;
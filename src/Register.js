import React from 'react';


const Register = () => {
  return (
    <div>   
        <div className="register-box">
  <div className="register-logo">
    <a href="/dashboard"><b>Peopleworx</b></a>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form action="/dashboard" method="post" id="form">
        <div className="input-group mb-3 inputControl">
          <input type="text" className="form-control" placeholder="Full name" id="fName-reg" />
          <div className="input-group-append">
            <div className="input-group-text">
              <div className="error" />
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3 inputControl">
          <input type="email" className="form-control" placeholder="Email" id="email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <div className="error" />
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3 inputControl">
          <input type="password" className="form-control" placeholder="Password" id="password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <div className="error" />
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3 inputControl">
          <input type="password" className="form-control" placeholder="Retype password" id="pass2-reg" />
          <div className="input-group-append">
            <div className="input-group-text">
              <div className="error" />
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
      </div>
      <a href="./pwrx-login.html" className="text-center">I already have a membership</a>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

 </div>
  );
}

export default Register;
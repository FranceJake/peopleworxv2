import React from 'react';


const Login = () => {
  return (
    <div>   
     <div className="login-box">
  <div className="login-logo">
    <a href="/dashboard"><b>Peopleworx</b></a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../dashboard.html" method="post" id="form">
        <div className="input-group mb-3 inputControl">
          <input type="email" className="form-control" placeholder="Email" id="email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
            <div className="error" />
          </div>
        </div>
        <div className="input-group mb-3 inputControl">
          <input type="password" className="form-control" placeholder="Password" id="password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
          <div className="error" />
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign
              In</button>
          </div>
          {/* /.col */}
        </div>
      </form>

      <p className="mb-1">
        <a href="./pwrx-forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="pwrx-register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.login-card-body */}</div>
</div>


 </div>
  );
}

export default Login;
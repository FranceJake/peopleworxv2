import React from 'react';


const Forgotpw = () => {
  return (
    <div>
     <div className="login-box">
  <div className="login-logo">
    <a href="/dashboard"><b>Peopleworx</b></a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
      <form action="recover-password.html" method="post" id="form">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" id="email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
            <div className="error" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 inputControl">
            <button type="submit" className="btn btn-primary btn-block">Request new password</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      <p className="mt-3 mb-1">
        <a href="./pwrx-login.html">Login</a>
      </p>
      <p className="mb-0">
        <a href="./pwrx-register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
{/* /.login-box */}


    </div>
  );
}

export default Forgotpw;
import React from 'react'

const Dashboard = () => {
  return (
    <div>
 {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>3</h3>
              <p>Total Employees</p>
            </div>
            <div className="icon">
              <i className="fas fa-light fa-users" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-success">
            <div className="inner">
              <h3>100.00<sup style={{fontSize: 20}}>%</sup></h3>
              <p>On Time</p>
            </div>
            <div className="icon">
              <i className="fas fa-light fa-chart-pie" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>0<sup style={{fontSize: 20}}>%</sup></h3>
              <p>Lates</p>
            </div>
            <div className="icon">
              <i className="fas fa-light fa-clock" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>0<sup style={{fontSize: 20}}>%</sup></h3>
              <p>Absences</p>
            </div>
            <div className="icon">
              <i className="fas fa-solid fa-exclamation" />
            </div>
            <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
      </div>
      <div className="row">
        <section className="col-lg-12 connectedSortable">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Attendance Reports
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Annual</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Monthly</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="tab-content p-0">
                <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
                </div>
                <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                  <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
                </div>
              </div>
            </div>
          </div>
          <div className="card d-none">
            <div className="card-header">
            </div>
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus" /> Add item</button>
            </div>
          </div>
        </section>
        <section className="col-lg-5 connectedSortable d-none">
          {/* Map card */}
          <div className="card bg-gradient-primary">
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">
                  <div id="sparkline-1" />
                  <div className="text-white">Visitors</div>
                </div>
                <div className="col-4 text-center">
                  <div id="sparkline-2" />
                  <div className="text-white">Online</div>
                </div>
                <div className="col-4 text-center">
                  <div id="sparkline-3" />
                  <div className="text-white">Sales</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <canvas className="chart" id="line-chart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
          </div>
          <div className="card-footer bg-transparent">
          </div>
        </section></div>
    </div></section>
</div>

    </div>
  );
}

export default Dashboard;
import React from 'react'

const Schedules = () => {
  return (
    <div >

{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Schedules</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Schedules</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        {/* Date and time range */}
        <div className="form-group">
          <label>Date:</label>
          <div className="input-group date" id="scheduledate" data-target-input="nearest">
            <input type="text" className="form-control datetimepicker-input" data-target="#scheduledate" />
            <div className="input-group-append" data-target="#scheduledate" data-toggle="datetimepicker">
              <div className="input-group-text"><i className="fa fa-calendar" /></div>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{width: '20%'}}>
                  Employee ID
                </th>
                <th style={{width: '20%'}}>
                  Name
                </th>
                <th style={{width: '20%'}}>
                  Position
                </th>
                <th style={{width: '20%'}}>
                  Schedule
                </th>
                {/* <th>
                    Name
                </th>
                <th style="width: 8%" class="text-center">
                    Amount
                </th> */}
                <th style={{width: '30%'}}>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  ABC123456789
                </td>
                <td>
                  Jose Manalo
                </td>
                <td>
                  {/* <ul class="list-inline">
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar.png">
                        </li>
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar2.png">
                        </li>
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar3.png">
                        </li>
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar4.png">
                        </li>
                    </ul> */}
                  Programmer
                </td>
                <td>
                  8:00 - 17:00
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-info btn-sm" href="#">
                    <i className="fas fa-pencil-alt">
                    </i>
                    Edit
                  </a>
                  <a className="btn btn-danger btn-sm" href="#">
                    <i className="fas fa-trash">
                    </i>
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  AAS123456789
                </td>
                <td>
                  Al Guzman
                </td>
                <td>
                  {/* <ul class="list-inline">
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar.png">
                        </li>
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar2.png">
                        </li>
                    </ul> */}
                  Software Engineer
                </td>
                <td>
                  8:00 - 17:00
                </td>
                <td className="project-actions text-right">
                  <a className="btn btn-info btn-sm" href="#">
                    <i className="fas fa-pencil-alt">
                    </i>
                    Edit
                  </a>
                  <a className="btn btn-danger btn-sm" href="#">
                    <i className="fas fa-trash">
                    </i>
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div></section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}


    </div>
  );
}

export default Schedules;
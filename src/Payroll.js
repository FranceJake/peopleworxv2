import React from 'react'

const Payroll = () => {
  return (
    <div >
    {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Payroll</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Payroll</li>
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
      </div>
    </div>
    <div className="card-body p-0">
      <table className="table table-striped projects">
        <thead>
          <tr>
            <th style={{width: '12%'}}>
              Employee ID
            </th>
            <th style={{width: '12%'}}>
              Name
            </th>
            <th style={{width: '12%'}}>
              Position
            </th>
            <th style={{width: '12%'}}>
              Gross
            </th>
            <th style={{width: '12%'}}>
              Deduction
            </th>
            <th style={{width: '12%'}}>
              Net Pay
            </th>
            {/* <th>
                    Name
                </th>
                <th style="width: 8%" class="text-center">
                    Amount
                </th> */}
            <th style={{width: '20%'}}>
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
              Programmer
            </td>
            <td>
              60,000
            </td>
            <td>
              5,240
            </td>
            <td>
              54,760
            </td>
            <td className="project-actions text-right">
              <a className="btn btn-primary btn-sm" href="#">
                <i className="fas fa-file-invoice">
                </i>
                Payslip
              </a>
              <a className="btn btn-info btn-sm" href="#">
                <i className="fas fa-print">
                </i>
                Print
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
              Software Engineer
            </td>
            <td>
              50,000
            </td>
            <td>
              5,240
            </td>
            <td>
              44,760
            </td>
            <td className="project-actions text-right">
              <a className="btn btn-primary btn-sm" href="#">
                <i className="fas fa-file-invoice">
                </i>
                Payslip
              </a>
              <a className="btn btn-info btn-sm" href="#">
                <i className="fas fa-print">
                </i>
                Print
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* /.card-body */}
  </section></div>
{/* /.card */}



    </div>
  );
}

export default Payroll;
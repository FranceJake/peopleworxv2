import React from 'react';
import { Link } from 'react-router-dom';

const Attendance = () => {
  return (
    <div>
       {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Attendance</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
            <li className="breadcrumb-item active">Attendance</li>
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
        <Link className="btn btn-info btn-sm" to="#">
          <i className="fas fa-plus">
          </i>
          New
        </Link>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table">
          <thead>
            <tr>
              <th style={{width: '15%'}}>
                Employee ID
                <i className="fas fa-light fa-sort" />
              </th>
              <th style={{width: '15%'}}>
                Name
                <i className="fas fa-light fa-sort" />
              </th>
              <th style={{width: '15%'}}>
                Date
              </th>
              <th style={{width: '15%'}}>
                Time In
              </th>
              <th style={{width: '15%'}}>
                Time Out
              </th>
              <th style={{width: '15%'}}>
                Tools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ABC123
              </td>
              <td>
                Ano Nymous1
              </td>
              <td>
                09/01/2022
              </td>
              <td>
                8:00 AM
              </td>
              <td>
                5:00 PM
              </td>
              <td className="project-actions">
                <Link className=" btn btn-info btn-sm" to="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </Link>
                <Link className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                ABC456
              </td>
              <td>
                Ano Nymous2
              </td>
              <td>
                09/01/2022
              </td>
              <td>
                8:00 AM
              </td>
              <td>
                5:00 PM
              </td>
              <td className="project-actions">
                <Link className=" btn btn-info btn-sm" to="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </Link>
                <Link className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                ABC789
              </td>
              <td>
                Ano Nymous3
              </td>
              <td>
                09/01/2022
              </td>
              <td>
                8:00 AM
              </td>
              <td>
                5:00 PM
              </td>
              <td className="project-actions">
                <Link className=" btn btn-info btn-sm" to="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </Link>
                <Link className="btn btn-danger btn-sm" to="#">
                  <i className="fas fa-trash">
                  </i>
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}

    </div>
  );
}

export default Attendance;
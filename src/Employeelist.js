import React from 'react'

const Employeelist = () => {
  return (
    <div >

{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Employee List</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Employee List</li>
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
        <a className="btn btn-info btn-sm" href="#">
          <i className="fas fa-plus">
          </i>
          New
        </a>
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
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{width: '1%'}}>
                #
              </th>
              <th style={{width: '20%'}}>
                Employee ID
              </th>
              <th style={{width: '5%'}}>
                Photo
              </th>
              <th style={{width: '10%'}}>
                Name
              </th>
              <th style={{width: '10%'}} className="text-center">
                Position
              </th>
              <th style={{width: '10%'}}>
                Schedule
              </th>
              <th style={{width: '10%'}} className="text-center">
                Member Since
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                #
              </td>
              <td>
                ABC123456789
              </td>
              <td>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                  </li>
                </ul>
              </td>
              <td className="project_progress">
                Jose Manalo
              </td>
              <td className="project-state">
                Programmer
              </td>
              <td className="project_progress">
                7:00AM - 3:00PM
              </td>
              <td className="project-state">
                January 20 2022
              </td>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a>
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
                #
              </td>
              <td>
                AAS123456789
              </td>
              <td>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                  </li>
                </ul>
              </td>
              <td className="project_progress">
                Al Guzman
              </td>
              <td className="project-state">
                Software Engineer
              </td>
              <td className="project_progress">
                8:00AM-4:00PM
              </td>
              <td className="project-state">
                February 19,2021
              </td>
              <td className="project-actions text-right">
                <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a>
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
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}


    </div>
  );
}

export default Employeelist;
import React from 'react'

const App = () => {
  return (
    <div >
       {/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Overtime</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Overtime</li>
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
              <th style={{width: '15%'}}>
                Date
              </th>
              <th style={{width: '15%'}}>
                Employee ID
              </th>
              <th style={{width: '15%'}}>
                Name
              </th>
              <th style={{width: '15%'}} className="text-center">
                No.Hours
              </th>
              <th style={{width: '15%'}}>
                Rate
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
                January 25, 2022
              </td>
              <td>
                {/* <ul class="list-inline">
                        <li class="list-inline-item">
                            <img alt="Avatar" class="table-avatar" src="../../dist/img/avatar.png">
                        </li>
                    </ul> */}
                ABC123456789
              </td>
              <td className="project_progress">
                Jose Manalo
              </td>
              <td className="project-state">
                69
              </td>
              <td className="project_progress">
                100
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

export default App;
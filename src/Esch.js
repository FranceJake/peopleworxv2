import React from 'react'

const Esch = () => {
  return (
    <div >
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Employee Schedule</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Employee Schedule</li>
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
              <th style={{width: '40%'}}>
                Time In
              </th>
              <th style={{width: '40%'}}>
                Time Out
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
                #
              </td>
              <td>
                07:00AM
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
                3:00PM
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
                08:00AM
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
                4:00PM
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

export default Esch;
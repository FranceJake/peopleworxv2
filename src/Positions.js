import React from 'react'

const Positions = () => {
  return (
    <div >
{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Positions</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Positions</li>
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
        <table className="table">
          <thead>
            <tr>
              <th style={{width: '30%'}} className="text-center">
                Position Title
                <i className="fas fa-light fa-sort" />
              </th>
              <th style={{width: '30%'}} className="text-center">
                Rate per Hour
                <i className="fas fa-light fa-sort" />
              </th>
              <th style={{width: '40%'}} className="text-center">
                Tools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">
                Full-Stack Developer
              </td>
              <td className="text-center">
                ₱800.00
              </td>
              <td className="project-actions text-center">
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
              <td className="text-center">
                UI/UX Designer
              </td>
              <td className="text-center">
                ₱600.00
              </td>
              <td className="project-actions text-center">
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
              <td className="text-center">
                SEO Specialist
              </td>
              <td className="text-center">
                ₱500.00
              </td>
              <td className="project-actions text-center">
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

export default Positions;
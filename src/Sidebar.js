import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
   {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <Link to="/dashboard" className="brand-link">
    <img src="assets/dist/img/Peopleworx.jpg" alt="Peopleworx Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Peoplewokx</span>
  </Link>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="assets/dist/img/avatar4.png" className="img-circle elevation-2" alt="User" />
      </div>
      <div className="info">
        <Link to="/dashboard" className="d-block">Admin</Link>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item">
          <Link to="dashboard" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="nav-header">Manage</li>
        <li className="nav-item">
        </li><li className="nav-item">
          <Link to="attendance" className="nav-link">
            <i className="nav-icon fas fa-calendar" />
            <p>
              Attendance
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            <i className="nav-icon fas fa-users" />
            <p>
              Employees
              <i className="fas fa-angle-left right" />
            </p>
          </Link>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="employeelist" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Employee List</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="overtime" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Overtime</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cashadvance" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Cash Advance</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="esch" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Employee Schedule</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="deductions" className="nav-link">
            <i className="nav-icon fas fa-columns" />
            <p>
              Deduction
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="positions" className="nav-link">
            <i className="nav-icon fas fa-star" />
            <p>
              Positions
            </p>
          </Link>
        </li>
        <li className="nav-header">Printable</li>
        <li className="nav-item">
          <Link to="payroll" className="nav-link">
            <i className="nav-icon fas fa-file" />
            <p>
              Payroll
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="schedules" className="nav-link">
            <i className="nav-icon fas fa-clock" />
            <p>
              Schedules
            </p>
          </Link>
        </li>
      </ul></nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>



    </div>
  );
}

export default Sidebar;
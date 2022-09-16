import React from 'react';
import { Routes, Route } from "react-router-dom";


import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Cashadvance from './Cashadvance';
import Deductions from './Deductions';
import Employeelist from './Employeelist';
import Overtime from './Overtime';
import Payroll from './Payroll';
import Positions from './Positions';
import Esch from './Esch';
import Schedules from './Schedules';

const Content = () => {
  return (

   
    <Routes>
      <Route exact path="/" element={<Dashboard />}/>
      <Route  path="/dashboard" element={<Dashboard />}/>
      <Route  path="/attendance" element={<Attendance />}/>
      <Route  path="/cashadvance" element={<Cashadvance />}/>
      <Route  path="/deductions" element={<Deductions />}/>
      <Route  path="/employeelist" element={<Employeelist />}/>
      <Route  path="/overtime" element={<Overtime />}/>
      <Route  path="/payroll" element={<Payroll />}/>
      <Route  path="/positions" element={<Positions />}/>
      <Route  path="/Esch" element={<Esch />}/>
      <Route  path="/schedules" element={<Schedules />}/>
    </Routes>


  );
}

export default Content;
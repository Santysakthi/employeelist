
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import EmployeeList from './Components/EmployeeList';
import AddEditEmployee from './Components/AddEditEmployee';

function App() {
  const [employees, setEmployees] = useState([]);
  
  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
  };
  const editEmployee = (updatedEmployee) => {
    setEmployees( employees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
  };
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList employees={employees} deleteEmployee={deleteEmployee} />} />
        <Route path="/add-employee" element={<AddEditEmployee addEmployee={addEmployee} />}/>
        <Route path="/edit-employee/:id" element={<AddEditEmployee employees={employees} editEmployee={editEmployee} />}/>
      </Routes>
    </Router>
  );
}

export default App;

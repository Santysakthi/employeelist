import './EmployeeList.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeList({ employees, deleteEmployee }) {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        {employees.map((employee) => (
          <tr key={employee.id}>
           <th> {employee.name} </th><th> {employee.position}</th>
          <th>  <button onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</button></th>
            <th><button onClick={() => deleteEmployee(employee.id)}>Delete</button></th>
          </tr>
        ))}
      </table>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default EmployeeList;

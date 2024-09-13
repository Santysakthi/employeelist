import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEditEmployee.css'

function AddEditEmployee({ addEmployee, editEmployee, employees = [] }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({ name:'', position:'' });

  useEffect(() => {
    if (id) {
      const employeeToEdit = employees.find((emp) => emp.id === parseInt(id));
      if (employeeToEdit) {
        setEmployee(employeeToEdit);
      }
    }
  }, [id, employees]);

  const handleSubmit = () => {
    if (id) {
      if(employee.name.trim() ==="" && employee.position.trim() ===""){
        window.alert("Enter some thing")
        return;  }
      else{
        editEmployee(employee);  }  
    }
     else {
      if(employee.name.trim() === "" && employee.position.trim() === ""){
        window.alert("enter list")
        return; }
      else{
        addEmployee(employee); }
    }
    navigate('/employees');
  };

  return (
    <div>
      <h2>{id ? 'Edit Employee' : 'Add New Employee'}</h2>
      <table>
        <tr>
          <td><input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}/></td>
          <td> <input 
        type="text"
        placeholder="Position"
        value={employee.position}
        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}/></td>
          <td> <button onClick={handleSubmit}>{id ? 'Update' : 'Add'}</button></td>
          <td><button onClick={() => navigate('/employees')}> Cancel</button></td>
        </tr>
      </table>
      
     
     
      
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
}

export default AddEditEmployee;

import React from "react";
import "./Employee.css"

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
     
        <h3>
          <span className="card-employee">{props.employee.firstName} {props.employee.lastName}</span>
        </h3>
        <p>Address: {props.employee.address}</p>
        <p>Phone: {props.employee.phone}</p>
        <p>Location: {props.employee.location.name}</p>
      </div>
      <button type= "button" onClick= {() => props.history.push (`/employees/${props.employee.id}`) }>Details</button>      
    </div>
  );
};

export default EmployeeCard;

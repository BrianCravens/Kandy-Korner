import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./Employee.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", address: "", phone: "", locationId: ""});
  const [isLoading, setIsLoading] = useState(true)
 

  useEffect(() => {
    EmployeeManager.get(props.employeeId)
    .then(employee => {
      setEmployee({
        firstName: employee.firstName,
        lastName: employee.lastName,
        address: employee.address,
        phone: employee.phone,
        locationId: employee.location.name
      });
      setIsLoading(false)
    });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>
  <span style={{ color: "darkslategrey" }}>{employee.firstName},{employee.lastName}</span>
        </h3>
        <p>Address: {employee.address}</p>
        <p>Phone: {employee.phone}</p>
        <p>Location: {employee.locationId}</p>
      </div>
      <button type="button" disabled={isLoading} onClick={() => props.history.push(`/employees/${props.employeeId}/edit`)}
        >Edit Employee</button>
    </div>
  );
};
export default EmployeeDetail;

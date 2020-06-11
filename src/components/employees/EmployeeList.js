import React, { useEffect, useState} from 'react';
import EmployeeManager from "../../modules/EmployeeManager";
import EmployeeCard from "./EmployeeCard"
import "./Employee.css"

const EmployeeList = (props) => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getEmployees = () => {
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const deleteEmployee = id => {
        EmployeeManager.delete(id)
          .then(() => EmployeeManager.getAll().then(setEmployees));
      };

    useEffect(() => {
        getEmployees();
    }, []);

    return(
        <section className="section-content">
            <div className="btn-add">
            <button className="add_button" type= "button" onClick={() => {props.history.push("/employees/new")}}>Add New Employee</button>
            </div>
            <div className = "container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee = {employee} deleteEmployee = {deleteEmployee} {...props}/>)}
            </div>
        </section>
    );
}

export default EmployeeList
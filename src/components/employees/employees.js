import React, { useEffect, useState } from "react";

export const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then((data) => {
                setEmployees(data)
            })
        },
        []
    )

    return (
        <>
            <ul>
                {employees.map((employee) => {
                        return <li key={employee.id}>
                            <p><b>Name: </b>{employee.name}</p>
                            <p><b>Manager: </b>{employee.manager.toString()}</p>
                            <p><b>Full Time: </b>{employee.fullTime.toString()}</p>
                            <p><b>Location: </b>{employee.location.name} - {employee.location.address}</p>
                            <br></br>
                            </li>
                    })
                }
            </ul>
        </>
    )

}
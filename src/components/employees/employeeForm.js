import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [locations, updateLocation] = useState([])
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 1,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    })

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((data) => {
                updateLocation(data)
            })
        },
        []
    )

    const saveEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(res => res.json())
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Registration</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name </label>
                    <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Employee Name"
                    onChange={(changeEvent) => {
                        const copy = {...employee}
                        copy.name = changeEvent.target.value
                        setEmployee(copy)
                            }
                        } 
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location </label>
                    <select onChange={
                        (changeEvent) => {
                            const copy = {...employee}
                            copy.locationId = parseInt(changeEvent.target.value)
                            setEmployee(copy)
                        }
                    }>
                        {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager? </label>
                    <input type="checkbox"
                        onChange={
                            (changeEvent) => {
                                const copy = {...employee}
                                copy.manager = changeEvent.target.checked
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time? </label>
                    <input type="checkbox"
                        onChange={
                            (changeEvent) => {
                                const copy = {...employee}
                                copy.fullTime = changeEvent.target.checked
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate </label>
                    <input type="text"
                            className="form-control"
                            placeholder="Hourly Rate"
                            onChange={(changeEvent) => {
                                const copy = {...employee}
                                copy.hourlyRate = parseInt(changeEvent.target.value)
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button onClick={saveEmployee} className="btn btn-primary">Finish Hiring</button>
        </form>
    )
}
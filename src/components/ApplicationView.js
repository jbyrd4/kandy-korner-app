import React from "react";
import { Route } from "react-router-dom";
import { Customers } from "./customers/Customers";
import { EmployeeForm } from "./employees/employeeForm";
import { Employees } from "./employees/employees";
import { Locations } from "./locations/locations";
import { Products } from "./products/Products"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <Locations />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/customers">
                <Customers />
            </Route>
            <Route path="/employees">
                <Employees />
            </Route>
            <Route path="/employeeForm">
                <EmployeeForm />
            </Route>
        </>
    )
}
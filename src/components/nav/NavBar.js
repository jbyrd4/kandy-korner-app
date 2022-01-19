import React from "react";
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navBar__item">
                <Link className="navBar__link" to="/Products">Products</Link>
            </li>
            <li className="navBar__item">
                <Link className="navBar__link" to="/locations">Locations</Link>
            </li>
            <li className="navBar__item">
                <Link className="navBar__link" to="/employees">Employees</Link>
            </li>
            <li className="navBar__item">
                <Link className="navBar__link" to="/customers">Customers</Link>
            </li>
        </ul>
    )
}
import React, { useEffect, useState } from "react";

export const Customers = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((data) => {
                setCustomers(data)
            })
        },
        []
    )
    
    return (
        <>
        <h2>Customers</h2>
        <ul>
            {customers.map((customer) => {
                return <li key={customer.id}>{customer.name}</li>
            })}
        </ul>
        </>
    )
}
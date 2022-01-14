import React from "react";
import { Route } from "react-router-dom";
import { Locations } from "./locations";
import { Products } from "./Products"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <Locations />
            </Route>
            <Route path="/products">
                <Products />
            </Route>
        </>
    )
}
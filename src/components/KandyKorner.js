import React from "react";
import { ApplicationViews } from "./ApplicationView.js";
import { Locations } from "./locations.js";
import { NavBar } from "./nav/NavBar.js";
import { Products } from "./Products.js";

export const KandyKorner = () => {
    return <>
        <h1>Kandy Korner</h1>
        <NavBar />
        <ApplicationViews />
    </>
}
import React, { useEffect, useState } from "react";

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationArr) => {
                setLocations(locationArr)
            })
        },
        []
    )
    return (
        <div>
            {
                locations.map(
                    (location) => {
                        return <div key={`location--${location.id}`}>
                        <p>Address: {location.address}</p>
                        <p>Location: {location.name}</p>
                        <p>Store Size: {location.squareFootage} Square Feet</p>
                        <p>Handicap Access: {location.handicapAccess}</p>
                        </div>
                    }
                )
            }
        </div>
     )
}
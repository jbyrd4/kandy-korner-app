import React, { useEffect, useState } from "react";

export const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(
     () => {
         fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
         .then(res => res.json())
         .then((productArr) => {
             setProducts(productArr)
         })
     },
     []  
    )
    return (
       <>
            {
                products.map((product) => {
                    return <div key={`product--${product.id}`}>
                        <p>Name: {product.name}</p>
                        <p>Price: $ {product.price}</p>
                        <p>Product Type: {product.productType.name}</p>
                    </div>
                })
            }
       </> 
    )
}
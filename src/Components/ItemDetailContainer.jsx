// import { useEffect, useState } from "react";
// import ItemDetail from "./ItemDetail";
// import { Link } from "react-router-dom";


// export default function ItemDetailContainer() {
//     const [product, setProduct] = useState();

//     useEffect(() => {
//         fetch("../products.json")
//             .then((res) => res.json)
//             .then((data) => setProduct(data));
//     }, []);


//     if (!product) return null;

//     const mockApi = (categoryId) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {

//                 if (categoryiD != undefined) {
//                     const productsFilterId = productsJson.filter((item) => item.category === categoryId);
//                     resolve(productsFilterId)
//                 } else {
//                     resolve(productsJson)
//                 }

//             }, 500);
//         })
//     }
// }



import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('./products.json'))
        , 2000);
    })
}

export const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    
    const [data, setData] = useState([]);
    useEffect(() => {
        mockAPI()
        .then(res => res.json())
        .then((data) => setData(data));
    }, []);

    const getItem = data.find(item => (item.id == itemId))

    return (
        <div className='detail-container'>
            <ItemDetail data={getItem} />
        </div>
    )
} 
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(fetch('../../public/products.json'))
            , 1000);
    });
}

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        mockAPI()
            .then(res => res.json())
            .then((data) => setData(data));
    }, []);

    const getItem = data.find(item => item.id === parseInt(itemId));

    if (!getItem) {
        return <div class="loading"></div>
    }

    return (
        <div className='detail-container'>
            <ItemDetail product={getItem} />
        </div>
    );
}
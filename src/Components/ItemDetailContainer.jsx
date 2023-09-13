import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';


const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(fetch('../../public/products.json'))
            , 2000);
    })
    
}


export const ItemDetailContainer = ({}) => {
    const { itemId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        mockAPI()
            .then(res => res.json())
            .then((data) => setData(data));
    }, []);

    const getItem = data.find(item => item.id == parseInt(itemId));

    return (
        <div className='detail-container'>
            <NavLink key={product.itemId} to={`/item/${product.itemId}`} />
            <ItemDetail itemId={getItem} /><NavLink/> 
        </div >

      
    )
}


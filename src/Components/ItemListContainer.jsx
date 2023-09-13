import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsJson from '../../public/products.json'
import ItemList from "./ItemList";


const mockApi = (categoryName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (categoryName != undefined) {
                const productsFilter = productsJson.filter((item) => item.category === categoryName);
                resolve(productsFilter)
            } else {
                resolve(productsJson)
            }

        }, 500);
    })
}

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams()


    useEffect(() => {
        mockApi(categoryName).then((data) => setProducts(data));
    }, [categoryName]);

    return < div className="item-list-container"><ItemList products={products} /></div>
}
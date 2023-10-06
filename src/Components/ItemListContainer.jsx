import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";


const mockApi = (categoryName) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();
        let q;

        if (categoryName) {
            q = query(collection(db, "products"), where("category", "==", categoryName));
        } else {
            q = query(collection(db, "products"), limit(25));
        }

        getDocs(q)
            .then((snapshot) => {
                if (!snapshot.empty) {
                    const productsData = snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    });
                    resolve(productsData);
                } else {
                    resolve([]);
                }
            })
            .catch((error) => {
                console.error("Error al obtener los datos de Firebase:", error);
                reject(error);
            });
    });
};

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const categoryName  = useParams().categoryName;

    useEffect(() => {

        mockApi(categoryName)
            .then((productsData) => {
                setProducts(productsData);
            })
            .catch((error) => {
                console.error("Error al obtener los datos simulados de Firebase:", error);
            });
    }, [categoryName]);

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;


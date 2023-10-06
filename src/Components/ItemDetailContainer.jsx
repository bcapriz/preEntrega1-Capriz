import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => {
   const { itemId } = useParams();
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const db = getFirestore();
    const q = doc(db, "products", itemId);
    getDoc(q).then((snapshot) => {
      setData({ id: snapshot.id, ...snapshot.data() });
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return <Loading/>; 
  }

  return (
    <div className='detail-container'>
      <ItemDetail product={data} />
    </div>
  );
};
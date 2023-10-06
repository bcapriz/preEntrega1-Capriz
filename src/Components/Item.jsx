import { NavLink } from "react-router-dom"

export default function Item({ product }) {

    return (
        <>
            <div className="item">
                <img className="product-image" src={product.image}  alt="product-image" />
                <div className="item-description">
                    <hr className="separator-line-details" />
                    <h2 className="title-item-list">{product.title}</h2>
                    <span>${product.price}</span>
                    <button className="custom-btn button-view-more"><NavLink key={product.id} to={`/item/${product.id}`}>Ver mas</NavLink></button>
                </div>
            </div>
        </>
    )
}
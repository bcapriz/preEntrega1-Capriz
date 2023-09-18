
import { NavLink } from "react-router-dom"

export default function Item({ product }) {

    return (
        <>
            <div className="item">
                <NavLink key={product.id} to={`/item/${product.id}`} >
                    <img src={product.image} width={125} alt="product-image" /> 
                    <hr className="separator-line-details"/>
                    <h2 className="title-item-list">{product.title}</h2>
                    <span>${product.price}</span>
                </NavLink>
            </div>

        </>
    )
}
import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../Context/ShopContext'

export default function Product(props) {
    const {id,name,price,image,MoreDetails,review} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
        <img src={image}  />
        <div className="discription">
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
        <button className='addtocartbtn' onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

import React, { useContext } from 'react'
import { products } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import CartItems from './CartItems'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()

  return (
    <div className="cart">
        <div className="cart-title">
            <h1>Your Cart Items</h1>
        </div>
        <div className="cart-items">
            {products.map((item) => {
                if(cartItems[item.id] !== 0){
                    return <CartItems data={item}/>
                }
            })}
        </div>
        {totalAmount > 0 ? 
            <div className="checkout">
            <p>Subtotal :  $ {totalAmount}</p>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        :
        <h1>Your Cart is Empty</h1>
         }
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="links">
            <ul>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
            
            
        </div>
    </div>
  )
}

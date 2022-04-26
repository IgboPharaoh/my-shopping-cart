import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../Context'
import './styles.css'

const Header = () => {
  const {cart} = CartState()
  return (
    <div className="header">
      <h2>Simple Cart with UseContext</h2>
      <div>
        <Link to='/cart' style={{color: 'blue', textDecoration: 'underline'}}> { cart.length === 0 ? 'Cart': "Cart: " + cart.length } </Link>
      </div>
    </div>
  )
}

export default Header
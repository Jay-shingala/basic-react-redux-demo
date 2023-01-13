import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const result = useSelector(state => state.cartData.cart)
    console.log(result)
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='https://img.icons8.com/ios-filled/100/null/shopping-cart.png' alt='' height="40px" />
        </div>
    </div>
  )
}

export default Header
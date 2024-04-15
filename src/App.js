import React from 'react'
import {addToCart} from './redux/Action'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  )
}

export default App
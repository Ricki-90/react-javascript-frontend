import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {
  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart


  return (
    <div className="shoppingcart-item">
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className="item-info">
        <div className="item-info-name">{item.product.name}</div>
        <div className="item-info-quantity">
            <div className="item-info-quantity-box">
              <button onClick={() => incrementQuantity}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => decrementQuantity}>-</button>
            </div>
        </div>
      </div>
      <div className="item-price">
        <div>{item.product.price * item.quantity}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i class="fa-solid fa-trash"></i></button>
      </div>



    </div>
  )
}

export default ShoppingCartItem
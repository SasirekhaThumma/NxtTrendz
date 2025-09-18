// src/components/CartListView/index.js
import './index.css'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-items-list">
          {cartList.map(item => (
            <CartItem key={item.id} cartItemDetails={item} />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView

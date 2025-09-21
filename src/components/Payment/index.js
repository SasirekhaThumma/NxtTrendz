import {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const Payment = ({close}) => {
  const {cartList} = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('') // nothing selected initially
  const [orderPlaced, setOrderPlaced] = useState(false)

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const handleConfirm = () => {
    if (paymentMethod === 'COD') {
      setOrderPlaced(true)
    }
  }

  return (
    <div className="payment-popup-container">
      {!orderPlaced ? (
        <>
          <h2 className="popup-title">Select Payment Method</h2>

          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="Card" disabled />
              Card
            </label>
            <label>
              <input type="radio" name="payment" value="Net Banking" disabled />
              Net Banking
            </label>
            <label>
              <input type="radio" name="payment" value="UPI" disabled />
              UPI
            </label>
            <label>
              <input type="radio" name="payment" value="Wallet" disabled />
              Wallet
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
              />
              Cash on Delivery
            </label>
          </div>

          <div className="summary">
            <p>Items: {cartList.length}</p>
            <p>Total Price: ₹{total}</p>
          </div>

          <button
            type="button"
            className="confirm-btn"
            onClick={handleConfirm}
            disabled={paymentMethod !== 'COD'}
          >
            Confirm Order
          </button>
          <button type="button" className="close-btn" onClick={close}>
            Cancel
          </button>
        </>
      ) : (
        <div className="success-message">
          <h3>Your order has been placed successfully</h3>
          <p>Payment Method: {paymentMethod}</p>
          <button type="button" className="close-btn" onClick={close}>
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default Payment

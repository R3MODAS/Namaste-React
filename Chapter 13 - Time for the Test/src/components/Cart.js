import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import CartList from "./CartList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
      <button onClick={handleClearCart} className="font-GrotMed block bg-black text-white w-28 h-10 rounded mt-5">Clear Cart</button>
      </div>
      <div className="w-6/12 mx-auto">
        {
          cartItems.length === 0 ? <h2 className="text-center font-GrotBold text-3xl mt-4">No items in cart yet !!</h2> :  <CartList items = {cartItems} />
        }
      </div>
    </div>
  )
}

export default Cart
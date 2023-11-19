import { useDispatch, useSelector } from "react-redux"
import RestaurantMenuList from "../components/RestaurantMenuList";
import CartList from "../components/CartList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="w-6/12 mx-auto menu-container pt-28 pb-5">
      {
        cartItems.length === 0 ? <CartList items={cartItems} /> : <>
          <h2 className="font-ProximaNovaBlack text-4xl text-center mb-5">Welcome to Cart Page</h2>
          <button className="bg-black text-white w-32 h-11 font-ProximaNovaSemiBold block mx-auto mb-3"
            onClick={handleClearCart}
          >Clear Cart</button>
          <CartList items={cartItems} />
        </>
      }


    </div>
  )
}

export default Cart
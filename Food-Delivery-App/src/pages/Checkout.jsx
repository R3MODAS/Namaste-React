import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from '../components/Cart'

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <>
      {
        cartItems.length === 0 ?
          <div className='mx-auto pt-5 mb-10 w-1/2 min-h-screen'>
            <div className='flex items-center justify-center flex-col mt-20'>
              <img src="/assets/empty-cart.webp" alt="empty-cart" className='w-72 h-64' />
              <h2 className='mt-6 text-xl text-color-6 font-ProximaNovaSemiBold'>Your cart is empty</h2>
              <p className='mt-1 text-color-8 font-ProximaNovaThin text-sm'>You can go to home page to view more restaurants</p>
              <Link to="/" className='uppercase mt-7 py-3 px-5 bg-color-2 text-white font-ProximaNovaBold cursor-pointer border-0 text-[15px] text-center'>see restaurants near you</Link>
            </div>
          </div>
          :

          <div className='bg-[#e9ecee] w-full min-h-screen pt-28'>
              <Cart cartItems={cartItems} />
          </div>
      }

    </>

  )
}

export default Checkout
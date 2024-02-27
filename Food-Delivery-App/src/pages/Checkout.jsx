import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { clearCart, deleteItem } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)

  const totalPrice = cartItems.reduce((total, item) => total + (item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100), 0);

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item?.card?.info?.id));
    toast.success('Removed from the Cart', {
      className: "font-ProximaNovaSemiBold",
      position: "top-center",
      duration: 1500
    });
  }

  const handleClearAll = () => {
    dispatch(clearCart())
    toast.success('Cart is cleared Successfully', {
      className: "font-ProximaNovaSemiBold",
      position: "top-center",
      duration: 1500
    });
  }

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
            <div className='container mx-auto w-2/3'>
              <div className='flex'>
                <div className='flex-1 mr-8'>
                  <div>
                    <div className='bg-white ml-6 mb-5 px-9 pt-7 pb-8 relative flex items-start justify-between'>
                      <div>
                        <h3 className='text-color-1 text-lg font-ProximaNovaSemiBold'>Account</h3>
                        <p className='text-color-8 font-ProximaNovaThin text-base'>To place your order now, log in to your existing account or sign up.</p>
                        <div className="mt-8">
                          <button className="text-color-11 mr-5 border border-color-11 px-8 py-1 text-[13px] font-ProximaNovaThin">
                            <div>Have an account?</div>
                            <div className="uppercase font-ProximaNovaSemiBold text-sm">log in</div>
                          </button>
                          <button className="bg-color-11 text-white px-8 py-1 text-[13px] font-ProximaNovaThin">
                            <div>New to Swiggy?</div>
                            <div className="uppercase font-ProximaNovaSemiBold text-sm">sign up</div>
                          </button>
                        </div>
                      </div>
                      <div>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r" alt="" />
                      </div>
                      <div className="absolute -left-8 bg-color-1 text-white w-10 h-10 flex items-center justify-center shadow-md">
                        <FaRegUser className="text-xl" />
                      </div>
                    </div>
                    <div className="bg-white ml-6 mb-5 px-9 pt-7 pb-8 relative">
                      <p className="text-color-5 font-ProximaNovaSemiBold text-lg tracking-tight">Delivery Address</p>
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white text-color-1 w-10 h-10 flex items-center justify-center shadow-md">
                        <GoLocation className="text-xl" />
                      </div>
                    </div>
                    <div className="bg-white ml-6 px-9 pt-7 pb-8 relative">
                      <p className="text-color-5 font-ProximaNovaSemiBold text-lg tracking-tight">Payment</p>
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white text-color-1 w-10 h-10 flex items-center justify-center shadow-md">
                        <CiWallet className="text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-96 bg-white px-4 py-5 flex flex-col">
                  <>
                    {
                      cartItems?.map((item) => (
                        <div key={item?.card?.info?.id} className="pb-4">
                          <div className="flex items-center">
                            <div className="flex items-start flex-1">
                              {
                                item?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ? <img src="/assets/veg.png" alt="veg" /> : <img src='/assets/nonveg.png' alt='non-veg'></img>
                              }
                              <h3 className={`font-ProximaNovaThin text-sm ml-2 leading-4 ${item?.card?.info?.name?.length > 16 ? 'w-2/3' : 'w-full'}`}>{item?.card?.info?.name}</h3>
                            </div>
                            <div className="flex items-center">
                              <span className="rupee text-color-6 text-sm font-ProximaNovaThin mr-3">{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                              <button onClick={() => handleDeleteItem(item)} className="bg-red-500 text-white text-sm px-3 py-1 rounded-md"><IoClose /></button>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </>
                  <div className="flex justify-between bg-color-11 text-white py-2 px-2">
                    <div>
                      <h3 className="text-base font-ProximaNovaSemiBold">Total Price</h3>
                    </div>
                    <div>
                      <span className="rupee font-ProximaNovaSemiBold">{totalPrice}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="bg-color-2 text-white font-ProximaNovaSemiBold w-28 py-2 px-2">Place Order</button>
                    <button onClick={handleClearAll} className="bg-red-500 text-white font-ProximaNovaSemiBold w-28 py-2 px-2">Clear All</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
      }
      <Toaster />
    </>

  )
}

export default Checkout
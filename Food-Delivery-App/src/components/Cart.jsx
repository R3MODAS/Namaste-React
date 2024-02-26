import { FaRegUser } from "react-icons/fa6";
import { GoLocation, GoPlus } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";

const CartList = ({ cartItems }) => {

  return (
    <>
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
              <div className="bg-white ml-6 mb-5 px-9 pt-7 pb-8 relative">
                <p className="text-color-5 font-ProximaNovaSemiBold text-lg tracking-tight">Payment</p>
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white text-color-1 w-10 h-10 flex items-center justify-center shadow-md">
                  <CiWallet className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 bg-white px-4 py-5 flex flex-col">
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
                    <div className="flex items-center w-[120px]">
                      <div className="border border-[#d4d5d9] text-color-11 font-ProximaNovaMed bg-white w-16 text-sm mr-3">
                        <button className="w-1/3 py-2 pl-1"><FiMinus /></button>
                        <button className="w-1/3 relative -top-[2px]">1</button>
                        <button className="w-1/3 py-2 pl-1"><GoPlus /></button>
                      </div>
                      <span className="rupee text-color-6 text-xs font-ProximaNovaThin">{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice / 100}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CartList
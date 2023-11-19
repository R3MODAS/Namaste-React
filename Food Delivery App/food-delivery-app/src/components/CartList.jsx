import React from 'react'
import { MENU_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';

const CartList = (props) => {
    const { items } = props;

    return (
        <>
            {
                items?.length != 0 ?
                    <>
                        {
                            items?.map((item) => (
                                <div key={item?.card?.info?.id} className="menuItem">
                                    <div className="flex justify-between pb-12 pt-6">
                                        <div className="categoryLeft w-[600px]">
                                            {
                                                item?.card?.info?.isVeg ? <img src="/images/veg.png" alt="icon" /> :
                                                    <img src="/images/nonveg.png" alt="icon" />
                                            }
                                            <h3 className="text-base font-ProximaNovaMed">{item?.card?.info?.name}</h3>
                                            <span className="rupee font-ProximaNovaThin text-sm text-customblack-3">{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                                            {
                                                item?.card?.info?.description && <p className="mt-2 tracking-tight text-customcolor-4 text-sm">{item?.card?.info?.description}</p>
                                            }

                                        </div>
                                        <div className="categoryRight w-[150px] h-[96px]">
                                            {
                                                item?.card?.info?.imageId && <img src={MENU_IMG + item?.card?.info?.imageId} alt="menu-img" className="object-cover w-[150px] h-[96px] rounded-lg" />
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </> :

                    <div className='flex items-center justify-center flex-col'>
                        <img src="/images/empty-cart.webp" alt="empty-cart" className='w-72 h-64 object-cover' />
                        <h2 className='font-ProximaNovaSemiBold text-[#535665] mt-6 text-xl'>Your cart is empty</h2>
                        <p className='mt-2 text-[#7e808c] font-ProximaNovaThin text-sm'>You can go to home page to view more restaurants</p>
                        <Link to="/" className='uppercase bg-orange-500 text-white font-ProximaNovaSemiBold mt-4 px-5 py-[11px] cursor-pointer text-[15px]'>see restaurants near you</Link>
                    </div>


            }
        </>
    )
}

export default CartList
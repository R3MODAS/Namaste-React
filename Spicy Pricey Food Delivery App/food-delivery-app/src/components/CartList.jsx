import React, { useEffect, useState } from 'react'
import { MENU_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../utils/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

const CartList = (props) => {
    const { items } = props;
    const dispatch = useDispatch();
    const [TotalCost, setTotalCost] = useState(0);

    useEffect(() => {

        const updatedItemPrice = items?.map((card) => (
            parseInt(
                card?.card?.info?.price ?
                    card?.card?.info?.price : card?.card?.info?.defaultPrice
            ) / 100
        ))

        const TotalItemPrice = updatedItemPrice?.reduce((total, currPrice) => (
            total + currPrice
        ), 0)

        setTotalCost(TotalItemPrice);

    }, [])

    const handleDeleteItem = (item) => {
        dispatch(deleteItem(item?.card?.info?.id));
        toast.success('Removed from the Cart', {
            className: "font-ProximaNovaSemiBold",
            position: "top-center",
            duration: 1500
        });
    }

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
                                                item?.card?.info?.description && <p className="md:w-full w-9/12 mt-2 tracking-tight text-customcolor-4 text-sm">{item?.card?.info?.description}</p>
                                            }

                                        </div>
                                        <div className="categoryRight w-[150px] h-[96px] relative">
                                            {
                                                item?.card?.info?.imageId && <img src={MENU_IMG + item?.card?.info?.imageId} alt="menu-img" className="object-cover w-full h-full sm:w-[150px] sm:h-[96px] rounded-lg" />
                                            }
                                            <button className="w-16 h-7 text-xs md:w-24 md:h-9 bg-red-500 text-white rounded addBtn font-ProximaNovaBold uppercase md:text-sm cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2"
                                                onClick={() => handleDeleteItem(item)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className='flex items-center justify-center flex-col sm:flex-row'>
                            <h2 className='text-center bg-orange-500 text-white w-60 mt-5 font-ProximaNovaSemiBold text-lg flex items-center h-14  gap-3 justify-center'>Total Price : <span className='rupee'>{TotalCost}</span></h2>

                            <button className='bg-black text-white h-14 w-60 mt-5 font-ProximaNovaMed text-lg'>Continue to Checkout</button>
                        </div>

                    </> :

                    <div className='flex items-center justify-center flex-col'>
                        <img src="/images/empty-cart.webp" alt="empty-cart" className='w-72 h-64 object-cover' />
                        <h2 className='font-ProximaNovaSemiBold text-[#535665] mt-6 text-xl'>Your cart is empty</h2>
                        <p className='mt-2 text-[#7e808c] font-ProximaNovaThin text-sm'>You can go to home page to view more restaurants</p>
                        <Link to="/" className='uppercase bg-orange-500 text-white font-ProximaNovaSemiBold mt-4 px-5 py-[11px] cursor-pointer text-[15px]'>see restaurants near you</Link>
                    </div>


            }

            <Toaster />
        </>
    )
}

export default CartList
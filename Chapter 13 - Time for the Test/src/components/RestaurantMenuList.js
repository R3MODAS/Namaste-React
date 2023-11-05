import React from 'react'
import { MENU_IMG_CDN } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantMenuList = (props) => {
    const { items } = props;
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className='item-container'>
            {items.map((item) => (
                <div key={item.card.info.id} className='items'>
                    <div className='flex justify-between p-4'>

                        <div>
                            <h3 className='font-ProximaNovaSemiBold text-customblack-3 text-base mt-3 mb-0'>{item?.card?.info?.name}</h3>
                            <div className='before:content-["\20B9"] before:mr-1 font-ProximaNovaThin text-sm'>{item?.card?.info?.price / 100}</div>
                            {
                                item?.card?.info?.description && <p className='font-ProximaNovaThin text-customblack-4 text-sm w-3/4'>{item?.card?.info?.description}</p>
                            }
                        </div>

                        <div className='relative w-[118px] h-[96px]'>
                            {
                                item?.card.info.imageId && <img className='w-[118px] h-[96px] object-cover rounded-md' src={MENU_IMG_CDN + item?.card.info.imageId} alt="menu-img" />
                            }
                            <button onClick={() => handleAddItem(item)} className='font-ProximaNovaMed shadow-lg bg-white w-16 h-8 text-sm rounded left-1/2 -translate-x-1/2 absolute bottom-0 flex items-center justify-center'>Add</button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenuList
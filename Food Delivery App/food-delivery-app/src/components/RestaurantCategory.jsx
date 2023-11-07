/* eslint-disable react/prop-types */
import RestaurantMenuList from './RestaurantMenuList';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"

const RestaurantCategory = (props) => {
    const {data , handleShowItem, ShowItems} = props;

    const handleItemShown = () => {
        handleShowItem();
    }
  return (
    <> 
        {/* Accordion Header */}
        <div onClick={handleItemShown} className='flex items-center justify-between cursor-pointer pt-4 pb-3 pl-2 pr-2'>
            <h2 className='text-customblack-3 text-xl font-ProximaNovaBold'>{data?.title} ({data?.itemCards?.length})</h2>
            <div className='text-xl text-customblack-3'>
              {
                ShowItems ? <IoIosArrowUp /> : <IoIosArrowDown />
              }
                
            </div>
        </div>

        {/* Accordion Body */}
        {
         ShowItems && <RestaurantMenuList items = {data?.itemCards}  />
        }
        
    </>
  )
}

export default RestaurantCategory
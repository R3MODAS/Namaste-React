import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import RestaurantMenuList from './RestaurantMenuList';

const RestaurantCategory = (props) => {
    const { data, ShowItems, handleShowItem } = props;

    const handleItems = () => {
        handleShowItem();
    }

    return (
        <li className='cursor-pointer py-1'>
                {/* Header */}
                <div onClick={handleItems} className='flex items-center justify-between p-4 bg-gray-50 shadow-md'>
                    <span className='font-ProximaNovaBold text-xl text-customblack-3'>{data?.title} ({data?.itemCards?.length})</span>
                    <span>
                        {
                            ShowItems ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                        }
                    </span>
                </div>

                {/* Accordion Body */}
                {
                    ShowItems && <RestaurantMenuList items={data?.itemCards} />
                }

        </li>
    )
}

export default RestaurantCategory
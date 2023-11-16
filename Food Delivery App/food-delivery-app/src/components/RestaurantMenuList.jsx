import { MENU_IMG } from "../utils/constants";

const RestaurantMenuList = (props) => {
    const { items } = props;
    return (
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
                                <span className="rupee font-ProximaNovaThin text-sm text-customblack-3">{item?.card?.info?.price / 100}</span>
                                {
                                    item?.card?.info?.description && <p className="mt-2 tracking-tight text-customcolor-4 text-sm">{item?.card?.info?.description}</p>
                                }

                            </div>
                            <div className="categoryRight relative w-[150px] h-[96px]">
                                {
                                    item?.card?.info?.imageId && <img src={MENU_IMG + item?.card?.info?.imageId} alt="menu-img" className="object-cover w-[150px] h-[96px] rounded-lg" />
                                }
                                <button className="addBtn font-ProximaNovaBold uppercase text-sm bg-white cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2">Add</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default RestaurantMenuList
import { Button } from "@/components/ui/button"

const FilterButtons = ({ AllRestaurants, setAllRestaurants, FilteredRestaurants, setFilteredRestaurants }) => {

    const handleFastDelivery = () => {
        setFilteredRestaurants(AllRestaurants.filter(res => res?.info?.sla?.deliveryTime >= 30 && res?.info?.sla?.deliveryTime <= 50))
    }

    const handleRating = () => {
        setFilteredRestaurants(AllRestaurants?.filter(res => res?.info?.avgRating > 4.0))
    }

    const handlePureVeg = () => {
        setFilteredRestaurants(AllRestaurants?.filter(res => res?.info?.badges?.imageBadges))
    }

    const handleOffers = () => {
        setFilteredRestaurants(AllRestaurants.filter(res => res?.info?.aggregatedDiscountInfoV3?.header || res?.info?.aggregatedDiscountInfoV3?.subHeader))
    }

    const handlePrice300to600 = () => {
        const MinPrice = "300", MaxPrice = "600"
        setFilteredRestaurants(AllRestaurants.filter(res => res?.info?.costForTwo?.slice(1, 4) >= MinPrice && res?.info?.costForTwo?.slice(1, 4) <= MaxPrice))
    }

    const handlePriceLessthan300 = () => {
        const MinPrice = "300"
        setFilteredRestaurants(AllRestaurants.filter(res => res?.info?.costForTwo?.slice(1, 4) <= MinPrice))
    }

    return (
        <div className="flex items-center gap-x-5 my-4">
            <Button onClick={handleFastDelivery} className="rounded-3xl bg-color-1 font-SfProMed">Fast Delivery</Button>
            <Button onClick={handleRating} className="rounded-3xl bg-color-1 font-SfProMed">Ratings 4.0+</Button>
            <Button onClick={handlePureVeg} className="rounded-3xl bg-color-1 font-SfProMed">Pure Veg</Button>
            <Button onClick={handleOffers} className="rounded-3xl bg-color-1 font-SfProMed">Offers</Button>
            <Button onClick={handlePrice300to600} className="rounded-3xl bg-color-1 font-SfProMed">Rs. 300 - Rs. 600</Button>
            <Button onClick={handlePriceLessthan300} className="rounded-3xl bg-color-1 font-SfProMed">Less than Rs. 300</Button>
        </div>
    )
}

export default FilterButtons
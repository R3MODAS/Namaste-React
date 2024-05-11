import CommonButton from "../Common/Button"

const FilterButtons = () => {
    return (
        <div className="flex items-center gap-x-5 my-4">
            <CommonButton>Fast Delivery</CommonButton>
            <CommonButton>Ratings 4.0+</CommonButton>
            <CommonButton>Pure Veg</CommonButton>
            <CommonButton>Offers</CommonButton>
            <CommonButton>Rs. 300 - Rs. 600</CommonButton>
            <CommonButton>Less than Rs. 300</CommonButton>
        </div>
    )
}

export default FilterButtons
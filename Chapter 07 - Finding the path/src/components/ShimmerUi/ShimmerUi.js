import {ShimmerSimpleGallery, ShimmerButton, ShimmerBadge} from "react-shimmer-effects";
import Styles from "./Shimmer.module.css";

const ShimmerUi = () => {
    return (
        <div className="Container">
            <div className={`Flex ${Styles.ShimmerButtons}`}>
                <ShimmerButton size="lg" />
                <ShimmerButton size="lg" />
            </div>
            <ShimmerSimpleGallery center imageHeight={200} caption />
        </div>
    )
};

export default ShimmerUi;

import { useRestaurant } from '@/hooks/useRestaurant'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem
} from "@/components/ui/carousel"
import { CAROUSEL_IMG } from "@/utils/constants";
import ShimmerHome from '@/components/Shimmer/ShimmerHome';
import RestaurantCard from '@/components/RestaurantCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [CarouselData, setCarouselData, TopChainRestaurants, setTopChainRestaurants, AllRestaurants, setAllRestaurants] = useRestaurant()

  if (AllRestaurants.length <= 0) {
    return <ShimmerHome />
  }

  return (
    <div className='my-24 container mx-auto'>
      {/* Carousel Section */}
      {
        (CarouselData && setCarouselData.length !== 0) &&
        <>
          <section>
            <h2 className="font-SfCompactBold text-2xl">What's on your mind?</h2>
            <Carousel className="relative">
              <div className="absolute right-5 -top-4 z-[1]">
                <CarouselPrevious className="disabled:bg-color-2/80 text-color-1 -left-20 bg-color-2 hover:bg-color-2/80" />
                <CarouselNext className="disabled:bg-color-2/80 text-color-1 -left-10 bg-color-2 hover:bg-color-2/80" />
              </div>
              <CarouselContent className="pt-5">
                {
                  CarouselData?.map((card) => (
                    <CarouselItem key={card?.id} className="basis-1/7">
                      <img className="w-40" src={CAROUSEL_IMG + card?.imageId} alt="carousel-img" />
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
            </Carousel>
          </section>


          <div className='divider'></div>
        </>
      }


      {/* Top Chain Restaurant Section */}
      {
        (TopChainRestaurants && TopChainRestaurants.length !== 0) &&
        <>
          <section>
            <h2 className="font-SfCompactBold text-2xl">Top Restaurants in Kolkata</h2>
            <Carousel className="relative">
              <div className="absolute right-5 -top-4 z-[1]">
                <CarouselPrevious className="disabled:bg-color-2/80 text-color-1 -left-20 bg-color-2 hover:bg-color-2/80" />
                <CarouselNext className="disabled:bg-color-2/80 text-color-1 -left-10 bg-color-2 hover:bg-color-2/80" />
              </div>
              <CarouselContent className="pt-5">
                {
                  TopChainRestaurants?.map((card) => (
                    <Link key={card?.info?.id} to={`/restaurants/${card?.info?.id}`}>
                      <RestaurantCard info={card?.info} />
                    </Link>
                  ))
                }
              </CarouselContent>
            </Carousel>
          </section>

          <div className="divider"></div>
        </>
      }
    </div>
  )
}

export default Home
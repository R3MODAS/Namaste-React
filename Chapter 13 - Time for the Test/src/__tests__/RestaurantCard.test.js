import { render, screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import MockData from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom"

it("Check whether Res Card is rendered properly or not", () => {
    render(<RestaurantCard resInfo = {MockData} />);

    const name = screen.getByText("Maa Restaurant");
    expect(name).toBeInTheDocument();
    
})

// it("Check whether Res Card with Offer is rendered properly or not", () => {
   
//     render(OfferResCard(<RestaurantCard {...MockData} />))
// })
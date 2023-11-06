import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import MockResList from "../mocks/ResListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockResList);
        }
    });
});

it("Should search ResCard for Restaurant Input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target : {value : "Restaurant"}});
    fireEvent.click(searchBtn);

    // should load 3 cards
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);

})

it("Should Filter Top Rated Restaurant", async() => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>))
    
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2)
})
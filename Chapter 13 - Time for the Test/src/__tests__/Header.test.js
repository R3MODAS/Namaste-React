import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with anchor tags", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const links = screen.getAllByRole("link");
    waitFor(() => {
        expect(links).toBeInTheDocument()
    })
})

it("Should render Header component with Login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", {name : "Login"})
    expect(login).toBeInTheDocument();
})

it("Should render Header component with Cart Items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

it("Should change Login -> Logout on Click and render Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const login = screen.getByRole("button", {name : "Login"})
    fireEvent.click(login);
    const logout = screen.getByRole("button", {name : "Logout"})
    
    expect(logout).toBeInTheDocument();
})
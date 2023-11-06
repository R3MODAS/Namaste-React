import  { render, screen } from "@testing-library/react"
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

// test("",() => {}) two args => desc and callback function which contains the test case logic

test("Should render the contact page and heading properly", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Checking if the input is rendered properly or not", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("button");
    inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
    })
})

test("Checking if the image is rendered properly or not", () => {
    render(<Contact />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
})
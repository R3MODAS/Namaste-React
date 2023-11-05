import  { render, screen, waitFor } from "@testing-library/react"
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
    test('Should load heading inside Contact Component', () => {
        render(<Contact />);
        const heading = screen.getAllByRole("heading");
        waitFor(() => {
            expect(heading).toBeInTheDocument();
        })
    })
    
    test('Should load button inside Contact Component', () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Contact us Here");
            expect(button).toBeInTheDocument();
    })
    
    it('Should load 2 inputs inside Contact Component', () => {
        render(<Contact />);
        const inputs = screen.getAllByRole("textbox");
        expect(inputs.length).toBe(2);
    })
    
})



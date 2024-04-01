import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Conatct Us Page Test Case", () => {
  //we can also use it instead of test both are the same thing
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);
    //get by role it only check only one input
    const inputname = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputname).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    // when there are mutiple items then we use getAll
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    

    // console.log(inputBoxes);

    //Assertion
    // expect(inputBoxes).toBeInTheDocument();
    expect(inputBoxes.length).toBe(2);
  });
});

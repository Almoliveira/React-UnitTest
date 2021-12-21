import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // ACT
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    //Arranged
    render(<Greeting />);

    //ACT
    // ... Nothing

    // ASSERT
    const outputElement = screen.getByText("It's good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('Renders changed if the button was clicked', () => {
    //Arranged  
    render(<Greeting />);

    //ACT
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ASSERT
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();

  });


  test('does not render "good to see you" if the button was clicked', () => {
    //Arranged  
    render(<Greeting />);

    //ACT
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // ASSERT
    const outputElement = screen.queryByText("It's good to see you!", { exact: false });
    expect(outputElement).toBeNull();

  });
});

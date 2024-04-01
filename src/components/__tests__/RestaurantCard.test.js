import { render, screen } from "@testing-library/react";
import RestaurantCard,{withVegLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("99 Rotiwala-Bhopal");

  expect(resName).toBeInTheDocument();
});

// it("should render RestaurantCard component with props Data", () => {
//     render(<withVegLabel />);
  
//     const resName = screen.getByText("Pure Veg🍃");
    
//     expect(resName).toBeInTheDocument();
//   });

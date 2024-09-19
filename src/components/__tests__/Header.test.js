import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header components test cases", () => {
  it("Should render Header component with Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBtn = screen.getByRole("button", { name:"Login" });
    expect(loginBtn).toBeInTheDocument();
  });
  
  it("Should render Header component with a Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItm = screen.getByText("Cart (0)");
    expect(cartItm).toBeInTheDocument();
  });
  
  it("Should render Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBtn = screen.getByRole("button", { name:"Login" });
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name:"Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
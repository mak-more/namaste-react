import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("Should render Body componenet with Search Button", async () => {
  await act(async() => render (
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ));
  
  const searchBtn = screen.getByRole("button", {name:"Search"});
  const searchInput = screen.getByTestID("searchInput");
  fireEvent.change(searchInput, {target: {value:'decoding'}});
  fireEvent.click(searchBtn);
  const blogs = screen.getAllByTestID();

  expect(searchBtn).toBeInTheDocument();
});
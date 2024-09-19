import { render, screen } from "@testing-library/react";
import BlogCard from "../BlogCard";
import MOCK_DATA from "../mocks/mockData.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render the Blog Card component with props data", () => {
  render(
    <BrowserRouter>
      <BlogCard blogData={MOCK_DATA} />
    </BrowserRouter>
    );
  // render (<blogObj />)

  const name = screen.getByText("Everything You Need to Know About Sovereign Gold Bond Scheme")
  expect(name).toBeInTheDocument();
});
import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly 1", () => {
  const { getByTestId } = render(<Button label="Click me"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me");
});

it("renders button correctly 2", () => {
  const { getByTestId } = render(<Button label="Just do it"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Just do it");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

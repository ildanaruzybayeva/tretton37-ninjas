import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Person from "./Person";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders 'office' pargagraph for each card", () => {
  act(() => {
    render(<Person />, container);
  });
  expect(container.textContent).toContain("Office");
});

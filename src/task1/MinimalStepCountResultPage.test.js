import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MinimalStepCountResultPage } from "./MinimalStepCountResultPage";

beforeEach(() => {
  jest.clearAllMocks();
});

const renderComponent = () => {
  const route = "/steps-count";
  const { getByTestId } = render(
    <MemoryRouter initialEntries={[route, { state: { password: "Test123" } }]}>
      <MinimalStepCountResultPage />
    </MemoryRouter>
  );
  return { getByTestId };
};

test("renders MinimalStepCountResultPage", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("minimal-step-count-page")).toBeInTheDocument();
});

test("steps count should be 0 for Test123", () => {
  const { getByTestId } = renderComponent();

  const stepElement = getByTestId("steps-count");
  expect(stepElement).toHaveTextContent("0");
});

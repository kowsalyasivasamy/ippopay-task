import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { StrongPasswordFormPage } from "./StrongPasswordFormPage";

beforeEach(() => {
  jest.clearAllMocks();
});

const renderComponent = () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/test-path"]}>
      <StrongPasswordFormPage />
    </MemoryRouter>
  );
  return { getByTestId };
};

test("renders StrongPasswordFormPage", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("strong-password-page")).toBeInTheDocument();
});

test("password-input should have the input value", () => {
  const { getByTestId } = renderComponent();

  const passwordInputElement = getByTestId("password-input");

  fireEvent.change(passwordInputElement, { target: { value: "Test123" } });
  fireEvent.keyPress(passwordInputElement, { key: "Enter", charCode: 13 });

  expect(passwordInputElement).toHaveValue("Test123");
});

// test("should navigate to /steps-count page after submit password-input", () => {
//   const mockNavigate = jest.fn();
//   const { getByTestId } = renderComponent();

//   const passwordInputElement = getByTestId("password-input");

//   fireEvent.change(passwordInputElement, { target: { value: "Test123" } });
//   fireEvent.keyPress(passwordInputElement, { key: "Enter", charCode: 13 });

//   expect(mockNavigate).toHaveBeenCalledWith("/steps-count");
// });

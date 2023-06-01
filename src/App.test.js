import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders StrongPasswordFormPage by default", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("strong-password-page")).toBeInTheDocument();
});

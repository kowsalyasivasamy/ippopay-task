import React from "react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";

export const StrongPasswordFormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    navigate("/steps-count", { state: { password: value } });
  };

  return (
    <div data-testid="strong-password-page">
      <h1>Task - React</h1>
      <TextField
        required
        id="outlined-required"
        label="Password"
        defaultValue=""
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e.target.value);
          }
        }}
        inputProps={{ "data-testid": "password-input" }}
      />
    </div>
  );
};

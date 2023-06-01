import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { saveResultsInDB } from "../common/api";
import { getMinimalStepCount } from "../common/service";

export const MinimalStepCountResultPage = () => {
  const { state } = useLocation();
  const { password } = state;

  const [steps, setSteps] = useState(null);

  useEffect(() => {
    const stepsCount = getMinimalStepCount(password);
    setSteps(stepsCount);
    saveResultsInDB(password, stepsCount);
  }, [password]);

  return (
    <>
      <h1>Minimal step count is</h1>
      {steps}
    </>
  );
};

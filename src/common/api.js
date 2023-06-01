export const saveResultsInDB = async (password, steps) => {
  const data = {
    name: "kowsi",
    password,
    minimalStepCount: steps,
  };
  try {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

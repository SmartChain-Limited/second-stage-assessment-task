
import React, { createContext, useState } from "react";

// Create a context with a default value (in this case, an object with a state and a function to update the state)
const MyContext = createContext({
  state: {},
  updateState: () => {},
});

// Create a provider component that will wrap your application
const MyContextProvider = ({ children }) => {
  const [state, setState] = useState({}); // Initial state

  // Function to update the state
  const updateState = (newState) => {
    setState(newState);
  };

  // Provide the state and updateState function to the components
  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };

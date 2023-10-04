// App.tsx
import React from 'react';
import Register from './pages/Register';
import { RegistrationProvider } from './context/FormContext';

function App() {
  return (
    <div className="App">
      <RegistrationProvider>
        <Register />
      </RegistrationProvider>
    </div>
  );
}

export default App;

import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <h2>Controlled Components</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;

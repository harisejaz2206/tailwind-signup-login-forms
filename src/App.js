// src/App.js
import React from 'react';
import Logo from './components/Logo';
import SignUpForm from './components/SignUpForm';
import AuthContainer from './components/AuthContainer';

function App() {
  return (
    <div>
      <AuthContainer className="App" />
    </div>
  );
}

export default App;

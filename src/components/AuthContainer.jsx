// AuthContainer.js
import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const AuthContainer = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleToggleForm = () => {
    setShowSignUp((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen">
      <div className="h-screen w-2/5 bg-gradient-to-br from-indigo-500 to-purple-500 flex flex-col items-center justify-center rounded-r-lg">
        {/* Logo */}
        <img
          src="https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          alt="Logo"
          className="h-24 w-24 rounded-full border-4 border-white mb-4"
        />

        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our App</h1>
          <p className="text-white text-lg">Create an account or log in to get started!</p>
        </div>
      </div>
      <div className="h-screen w-3/5 bg-white flex flex-col items-center justify-center rounded-l-lg px-8">
        <div className="flex space-x-4 mt-6">
          <button
            className={`${
              showSignUp ? 'text-indigo-500 font-bold' : 'text-gray-600 font-bold'
            } flex items-center px-4 py-2 rounded-md`}
            onClick={handleToggleForm}
          >
            Sign Up
          </button>
          <button
            className={`${
              showSignUp ? 'text-gray-600 font-bold' : 'text-indigo-500 font-bold'
            } flex items-center px-4 py-2 rounded-md`}
            onClick={handleToggleForm}
          >
            Log In
          </button>
        </div>
        {showSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
};

export default AuthContainer;

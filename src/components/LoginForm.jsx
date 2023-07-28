// LoginForm.js
import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="h-screen w-3/5 bg-white flex flex-col items-center justify-center rounded-l-lg px-8">
      <h2 className="text-3xl font-bold text-indigo-500">Log In</h2>
      <div className="flex space-x-4 mt-6">
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded-md">
          <FaFacebook className="mr-2" />
          Sign in with Facebook
        </button>
      </div>
      <div className="relative w-full mt-4">
        <input
          type="text"
          className="border-b border-gray-400 w-full py-3 px-4 focus:outline-none focus:border-indigo-500 text-lg font-medium"
          placeholder="Email Address"
        />
      </div>
      <div className="relative w-full mt-4">
        <input
          type={showPassword ? 'text' : 'password'}
          className="border-b border-gray-400 w-full py-3 px-4 pr-12 focus:outline-none focus:border-indigo-500 text-lg font-medium"
          placeholder="Password"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute top-3 right-4 cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <button className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white mt-6 w-full py-3 px-6 rounded-lg text-lg font-medium">
        Log In
      </button>
      <p className="mt-4 text-gray-600">
        Don't have an account?{' '}
        <span className="text-indigo-500 cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
};

export default LoginForm;

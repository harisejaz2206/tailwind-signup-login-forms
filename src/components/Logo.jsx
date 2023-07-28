import React from 'react';

const Logo = () => {
  return (
    <div className="h-screen w-2/5 bg-gradient-to-br from-indigo-500 to-purple-500 flex flex-col items-center justify-center rounded-r-lg">
      <img
        src="https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
        alt="Logo"
        className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
      />
      <p className="text-center mt-6 text-4xl font-bold text-white px-6">
        Find 3D objects, Mockups, And Illustrations Here.
      </p>
    </div>
  );
};

export default Logo;



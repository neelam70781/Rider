import React, { useState } from 'react';
import backgroundImage from '../assets/BikesBg/bike5.jpg';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
    console.log("Signing up with email:", email, "and password:", password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-sm mx-auto bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm">
          {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 font-semibold hover:underline">
            {isSignUp ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

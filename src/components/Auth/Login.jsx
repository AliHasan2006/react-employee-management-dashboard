import { useState } from 'react';
import React from 'react';
function Login({handleLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Form submitted with email: ${email}`); 
    handleLogin(email,password)
    setSubmitted(true);

        setEmail('');
    setPassword('');
  };
  
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#121212]">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="outline-none bg-transparent border-2 border-emerald-600 text-white placeholder:text-gray-500 text-xl py-3 px-5 mb-4 rounded-lg"
          />

          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="outline-none bg-transparent border-2 border-emerald-600 text-white placeholder:text-gray-500 text-xl py-3 px-5 mb-4 rounded-lg"
          />

          <button
            type="submit"
            className="outline-none bg-emerald-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-emerald-500 cursor-pointer"
          >
            Log In
          </button>
        </form>

        {/* {submitted && (
          <div className="text-xl text-white text-center mt-5 px-4">
            ✅ User <span className="text-emerald-400">{email}</span>, Logged In
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Login;

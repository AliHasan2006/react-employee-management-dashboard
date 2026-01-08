import { useState } from 'react';
import React from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Hello guyss, form submitted with email: ${email} and password: ${password}, ThankYou`);
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Enter Password"
            className="outline-none bg-transparent border-2 border-emerald-600 text-white placeholder:text-gray-500 text-xl py-3 px-5 mb-4 rounded-lg"
          />

          <button
            type="submit"
            className="outline-none bg-emerald-600 text-white px-6 py-2 mt-4 rounded-lg cursor-pointer hover:bg-emerald-500"
          >
            Log In
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login

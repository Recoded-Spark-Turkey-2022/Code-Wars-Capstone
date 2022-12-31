import React, { useState } from "react";

const FormCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform some action with the email and password values
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg p-8 ">
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4"
          type="submit"
        >
          Login
        </button>
        <button
          className=" hover:bg-blue-700 text-blue-500 font-bold py-2 px-6 rounded mt-4 translate-x-32 border border-blue-700 rounded hover:text-white  "
          type="submit"
        >
          singup
        </button>
      </form>
    </div>
  );
};

export default FormCard;
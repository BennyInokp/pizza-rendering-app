import React, { useState } from "react";
import { useRouter } from "next/router";

const AdminLogin = ({ onSignin, onLogout, isAdminSignedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "admin234") {
      
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isAdminSignedIn ? (
        <button onClick={onLogout} className="button">
          Logout
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-[1.5rem]">Admin Dashboard </h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 mb-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 mb-2 border border-gray-300 rounded"
          />
          <button className="h-10 px-4 py-2 text-white bg-emerald-900 w-[13.5rem]" onClick={handleLogin}>
            Sign in
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;

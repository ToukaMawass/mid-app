import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // basic validation (exam requirement)
    if (!email.includes("@")) {
      alert("Email must include @");
      return;
    }

    if (password.length < 5) {
      alert("Password must be at least 5 characters");
      return;
    }

    // fake user session
    const user = { email };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h1 className="text-xl font-bold text-center">Login</h1>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white w-full p-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
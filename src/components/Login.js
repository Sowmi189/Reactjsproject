import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name && password) {
      login(name);
      navigate("/dashboard");
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🎓 Student Login</h2>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
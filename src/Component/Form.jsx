import React, { useEffect, useState } from "react";

const Form = () => {
  const users = [
    { email: "@ybl", password: "123456789" },
    { email: "@ybl", password: "1234" },
    { email: "@ybl", password: "1" },
    { email: "@ybl", password: "789" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null); // 🔥 null | true | false

  const login = () => {
    const isValid = users.some(
      (u) => u.email === email && u.password === password
    );

    if (isValid) {
      setMessage("Login Successful ✅");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid Login ❌");
      setIsLoggedIn(false);
    }
  };

  // 🎨 background color logic
  const containerStyle = {
    width: "320px",
    margin: "100px auto",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor:
      isLoggedIn === null
        ? "#3b82f6" // blue
        : isLoggedIn
        ? "#22c55e" // green
        : "#ef4444", // red
    color: "white",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2>Login Form</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        style={inputStyle}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={inputStyle}
      />

      <button onClick={login} style={buttonStyle}>
        Submit
      </button>

      <p>{message}</p>
    </div>
  );
};

export default Form;

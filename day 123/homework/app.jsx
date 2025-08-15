import React, { useState } from "react";

export default function App() {
  // localStorage helper functions
  const store = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const get = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  // User class
  class User {
    constructor(name, email, password) {
      this.id = Date.now() + Math.floor(Math.random() * 1000);
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = new User(formData.name, formData.email, formData.password);

    let users = get("users") || [];
    users.push(newUser);

    store("users", users);

    alert("User registered successfully!");
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

import React from "react";

function UserCard() {
  return (
    <div style={{ border: "1px solid gray", padding: "20px", maxWidth: "300px" }}>
      <img
        src="/profile.jpg"  // შენიშვნა: შეიტანე ფოტო public/profile.jpg-ში
        alt="My Profile"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h1>Andria Maglaferidze</h1>
      <p>I'm a passionate React developer from Georgia.</p>
      <button onClick={() => alert("Hello from UserCard!")}>Click Me</button>
    </div>
  );
}

export default UserCard;

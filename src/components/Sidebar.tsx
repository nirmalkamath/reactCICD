import React from "react";

function Sidebar() {
  return (
    <aside style={{
      width: "200px",
      backgroundColor: "#f0f0f0",
      padding: "10px",
      height: "100vh",
      position: "fixed",
      top: "0",
      left: "0"
    }}>
      <h3>Sidebar</h3>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;

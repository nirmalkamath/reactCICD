import React from "react";

function Footer({ sendMessageToParent }) {
  const handleClick = () => {
    sendMessageToParent("Hello from Footer!"); // Send this message to App
  };

  return (
    <footer
      style={{
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <p>© 2024 My App</p>
      <button onClick={handleClick} style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
        Send Message to Parent
      </button>
    </footer>
  );
}

export default Footer;
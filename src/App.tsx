import React, { useState } from "react";
import Navbar from "./Navbar";
import Test from "./Components/Test";
import UserContext from "./UserContext";

function App() {
  // State for user data
  const [user, setUser] = useState({
    username: "JohnDoe",
    loggedIn: true,
    id: "24234324",
  });

  // Function to update user data
  const updateUser = (newValues) => {
    setUser((prev) => ({ ...prev, ...newValues }));
  };

  return (
    <UserContext.Provider value={{ ...user, updateUser }}>
      <Navbar /><Test />
    </UserContext.Provider>
  );
}

export default App;


import { useContext } from "react";
import UserContext from "../UserContext";

function Test() {
  // Access the context values
  const { username, loggedIn, id, updateUser } = useContext(UserContext);

  // Handlers to update context values
  const handleChangeUsername = () => {
    updateUser({ username: "JaneDoe" });
  };

  const handleToggleLoggedIn = () => {
    updateUser({ loggedIn: !loggedIn });
  };

  const handleChangeID = () => {
    updateUser({ id: "56789012" });
  };

  return (
    <div>
      <p>Welcome, {username}!</p>
      <p>Logged In: {loggedIn ? "Yes" : "No"}</p>
      <p>User ID: {id}</p>
      <button onClick={handleChangeUsername}>Change Username</button>
      <button onClick={handleToggleLoggedIn}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={handleChangeID}>Change User ID</button>
    </div>
  );
}

export default Test;

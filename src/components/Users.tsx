import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest } from "../red/usersSlice";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state: any) => state.users);

  const handleFetchUsers = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <div>
      <h1>Users List</h1>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Fetch Users"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

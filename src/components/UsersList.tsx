import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersThunk"; // Import thunk action creator
import { RootState, AppDispatch } from "../redux/store"; // Import types

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users); // Access users from state

  // Dispatch action to fetch users when button is clicked
  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  // Ensure users is defined before using .map()
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <div>
        {users && users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.name}</li> // Assuming each user has a 'name' property
            ))}
          </ul>
        ) : (
          <div>No users found</div>
        )}
      </div>
    </div>
  );
};

export default UsersList;

import React, { useState, useEffect } from "react";

// Define the type for a User
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the type for a new user (when creating one)
interface NewUser {
  name: string;
  email: string;
}

const FetchExample: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch users from API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        setUsers(data); // Update state with the response data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle form submission to create a new user
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: NewUser = { name, email };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data: User = await response.json();
      setUsers((prevUsers) => [...prevUsers, data]); // Add the new user to the list
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h1>Fetch Example</h1>

      {/* Form to create a new user */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>

      {/* Display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchExample;

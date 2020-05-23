import React, { useEffect, useState } from "react";
import api from "./services/api";

import UserC from "./components/User";

interface User {
  name: string;
  email?: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const { data } = await api.get<User[]>("/users");
      setUsers(data);
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <div className="App">
      {users.map((user) => (
        <UserC key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;

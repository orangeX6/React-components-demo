import React, { useState } from "react";

import UserList from "./components/User/UserList";
import UserForm from "./components/User/UserForm";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (user) => {
    setUsersList((prevUsers) => {
      const newUser = { ...user, id: Date.now() };
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addNewUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;

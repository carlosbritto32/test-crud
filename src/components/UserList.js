import { useEffect, useState } from "react";
import User from "./User";

import "../style/UserList.css";

const URL = "https://gorest.co.in/public/v2/users";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default UserList;

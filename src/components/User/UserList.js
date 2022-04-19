import React from "react";

import Card from "../UI/Card/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) return;

  const user = props.users.map((user) => {
    return <User key={user.id} name={user.user} age={user.age} />;
  });

  return (
    <Card>
      <ul className={styles.list}>{user}</ul>
    </Card>
  );
};

export default UserList;

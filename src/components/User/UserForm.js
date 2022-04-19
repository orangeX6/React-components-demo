import React, { useState } from "react";

import styles from "./UserForm.module.css";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const UserForm = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameTextChange = (e) => {
    setUser(e.target.value);
  };

  const userAgeChange = (e) => {
    setAge(+e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (user.trim().length === 0 || age === "")
      return setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (Non-Empty Values)",
      });

    if (age < 0)
      return setError({
        title: "Invalid Input",
        message: "Please enter valid name and age (> 0)",
      });

    const userDetails = {
      user,
      age,
    };

    props.onAddUser(userDetails);
    setUser("");
    setAge("");
  };

  const errorHandler = () => setError(null);

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Modal>
      )}
      <Card className={styles["user-form"]}>
        <form onSubmit={formSubmitHandler}>
          {/* <div className={styles["user-form"]}> */}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user}
            onChange={usernameTextChange}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={userAgeChange}
          ></input>
          {/* </div> */}

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;

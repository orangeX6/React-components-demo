import React, { useState, useRef } from 'react';

import styles from './UserForm.module.css';
import Card from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge === '')
      return setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (Non-Empty Values)',
      });

    if (enteredAge < 0)
      return setError({
        title: 'Invalid Input',
        message: 'Please enter valid name and age (> 0)',
      });

    const userDetails = {
      user: enteredName,
      age: enteredAge,
    };

    props.onAddUser(userDetails);

    // Not recommended. Rarely use refs to manipulate the DOM
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></Modal>
      )}
      <Card className={styles['user-form']}>
        <form onSubmit={formSubmitHandler}>
          {/* <div className={styles["user-form"]}> */}
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          {/* </div> */}

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;

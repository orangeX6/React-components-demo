import React from 'react';

import styles from './User.module.css';

const User = (props) => {
  return (
    <li className={styles.li}>{`${props.name} (${props.age} years old)`}</li>
  );
};

export default User;

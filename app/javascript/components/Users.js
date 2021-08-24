import React from "react"

const Users = (props) => {
  return (
    <div>
    <h1>All Users</h1>
    {props.users.map((user) => {
      return <div key={user.id}>
        <p>ID:{user.id}</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </div>;
    })}
    </div>
  );
};

export default Users
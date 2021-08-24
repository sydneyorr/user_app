import React from "react"

const Users = (props) => {
  return (
    <div>
    <h1>All Users</h1>
    <a href="/users/new">Create New User</a>
    {props.users.map((user) => {
      return <div style={{margin: "20px", border:"1px solid black"}} key={user.id}>
        <p>ID:{user.id}</p>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <div>
          <a href={`/users/${user.id}`}>Show User</a>
          <p></p>
          <a href={`/users/${user.id}/edit`}>Edit User</a>
          <p></p>
          <a href={`/users/${user.id}`} data-method="delete">Delete User</a>
        </div>
      </div>;
    })}
    </div>
  );
};

export default Users
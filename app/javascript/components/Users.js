import React from "react"

const Users = (props) => {
  return (
    <div style={{color: "cadetblue"}}>
    <h1 style={{alignItems:"center", fontFamily:'monospace'}}>ALL USERS</h1>
    <a style={{textDecoration:'none', color:'cornflowerblue', border:'1px dashed burlywood'}} href="/users/new">Create New User</a>
    {props.users.map((user) => {
      return <div style={{
        margin: "20px", 
        border:"1px solid black", 
        padding: "20px",
        backgroundColor: "aliceblue",
        }} 
        key={user.id}>
        <p>ID:{user.id}</p>
        <p>{user.name}</p>
        <p>Age: {user.age}</p>
        <div>
          <a style={{textDecoration:'none', color:'cornflowerblue', border:'1px dashed burlywood'}} href={`/users/${user.id}`}>Show User</a>
          <p></p>
          <a style={{textDecoration:'none', color:'cornflowerblue', border:'1px dashed burlywood'}} href={`/users/${user.id}/edit`}>Edit User</a>
          <p></p>
          <a style={{textDecoration:'none', color:'cornflowerblue', border:'1px dashed burlywood'}} href={`/users/${user.id}`} data-method="delete">Delete User</a>
        </div>
      </div>;
    })}
    </div>
  );
};

export default Users
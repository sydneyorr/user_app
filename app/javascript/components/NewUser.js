import React from "react"

const NewUser = () => {
  return (
    <div>
      <p>Create a User</p>
      <form action="/users" method="post">
      <p>Name:</p>
      <input name="user[name]"/>
      <p>Age:</p>
      <input name="user[age]"/>
      <button type = "submit">Add</button>
      </form>
    </div>
  );
};

export default NewUser;

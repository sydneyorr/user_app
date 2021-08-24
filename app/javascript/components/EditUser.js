import React from "react"

const EditUser = (props) => {
  return (
    <div>
      <p>Create a User</p>
      <form action={`/users/${props.user.id}`} method="post">
      <input type="hidden" name="_method" value="patch" />
      <p>Name:</p>
      <input defaultValue={props.user.name} name="user[name]"/>
      <p>Age:</p>
      <input defaultValue={props.user.age} name="user[age]"/>
      <button type = "submit">Update</button>
      </form>
      <a href="/">Back</a>
    </div>
  );
};

export default EditUser;

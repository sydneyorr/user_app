import React from "react"

const User = (props) => {
return (
  <div>
    <p>{props.user.name}</p>
    <p>{props.user.age}</p>
    <a href="/">Back</a>
  </div>
);
};

export default User;
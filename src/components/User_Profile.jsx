import React from "react";

const User_Profile = ({ user }) => {
  return (
    <div className="user-profile">
      <h3>{user.name}</h3>
      <p>@{user.username}</p>
      <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
    </div>
  );
};

export default User_Profile;

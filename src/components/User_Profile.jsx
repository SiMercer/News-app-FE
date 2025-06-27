export default function User_Profile({ user }) {
  if (!user || typeof user !== "object") {
    console.warn("Invalid user data:", user);
    return <p>User data not available.</p>;
  }

  const { avatar_url, username, name } = user;

  return (
    <div className="user_profile">
      <img src={avatar_url || ""} alt={`${username}'s avatar`} />
      <h3>{username || "Unknown user"}</h3>
      <p>{name || "Name not provided"}</p>
    </div>
  );
}
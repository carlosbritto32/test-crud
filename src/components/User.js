import "../style/User.css";

function User({ user }) {
  return (
    <div className="user-card">
      <img src={require("../assets/1946429.png")} alt="profile-user" />
      <p>{user.email}</p>
      <h4>{user.name}</h4>
      <p>{user.gender}</p>
      <p>{user.status.toUpperCase()}</p>
    </div>
  );
}

export default User;

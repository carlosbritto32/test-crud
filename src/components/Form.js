import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("pinky");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        onChange={(e) => {
          setGender(e);
        }}
        value={gender}
      >
        <option value="">---</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <label htmlFor="status">Status</label>
      <select
        name="status"
        onChange={(e) => {
          setStatus(e);
        }}
        value={status}
      >
        <option value="">---</option>
        <option value="active">active</option>
        <option value="inactive">inactive</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default Form;

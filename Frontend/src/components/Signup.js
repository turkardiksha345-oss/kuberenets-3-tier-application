import { useState } from "react";

const API = "http://localhost:5000";

function Signup() {
  const [user, setUser] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await fetch(`${API}/signup`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(user)
    });
    alert("Registered!");
  };

  return (
    <form className="signup" onSubmit={submit}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={e=>setUser({...user,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setUser({...user,email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e=>setUser({...user,password:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}
export default Signup;
import { useState } from "react";

export default function Login() {
  const[enteredValue , setEntereValue] = useState({email:"",password:""});
  // const[enteredPassword , setEnteredPassword] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValue);
  }

  function handleChange(e,identifier){
    setEntereValue((pv) => ({...pv,[identifier]:e.target.value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => handleChange(e,"email")} value={enteredValue.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  onChange={(e) => handleChange(e,"password")} value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

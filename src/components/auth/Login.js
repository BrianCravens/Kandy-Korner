import React, { useState } from "react"
import {withRouter} from 'react-router-dom'
import EmployeeManager from "../../modules/EmployeeManager"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    EmployeeManager.getUser(credentials.username, credentials.password).then((user) => {
      if (user.length < 1) 
      {window.alert("Account does not exist")
      }else{
        console.log(user[0])
        props.setUser(user[0])
        props.history.push("/products")
      }
    }
    /*
        For now, just store the email and password that
        the customer enters into session storage.
        ...Let's just trust the user... That's a good idea, right????
    */
    )
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">Username</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );

}
export default withRouter(Login)
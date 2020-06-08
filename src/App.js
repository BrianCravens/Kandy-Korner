import React, {useState} from "react";
import "./App.css";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./components/nav/NavBar"
import Login from "./components/auth/Login"
// import { withRouter } from 'react-router-dom'
const App = (props) => {
  //Returns true or false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  //Set to value of isAuthenticated / true or false
  const [hasUser, setHasUser] = useState(isAuthenticated());
  //Adding user to Session Storage setHasUser
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  
  return (
    <>
      {!hasUser && <Login hasUser={hasUser} setUser = {setUser}/>}
      {hasUser && <NavBar hasUser={hasUser} clearUser={clearUser}/>}
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
 )
};

export default App
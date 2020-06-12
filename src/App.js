import React, {useState} from "react";
import "./App.css";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./components/nav/NavBar"
import Login from "./components/auth/Login"
// import { withRouter } from 'react-router-dom'
const App = (props) => {
  const [isSupervisor, setIsSupervisor] = useState(false)
  //Returns true or false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  //Set to value of isAuthenticated / true or false
  const [hasUser, setHasUser] = useState(isAuthenticated());
  //Adding user to Session Storage setHasUser
  const setUser = user => {
    setIsSupervisor(user.isSupervisor)
    sessionStorage.setItem("credentials", JSON.stringify(user.id));
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
      <ApplicationViews isSupervisor={isSupervisor} hasUser={hasUser} setUser={setUser} />
    </>
 )
};

export default App
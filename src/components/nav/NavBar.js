import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./NavBar.css"

const NavBar = (props) => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push('/');
    }
    return (
        <header>
      <h1 className="site-title">
        Kandy Korner
        <br />
        <small>We have all the candy you'll ever need</small>
      </h1>
      <nav>
        <ul className="container">
          {props.hasUser ?<li><Link className="nav-link" to="/products">Products</Link></li>: null}
          {props.hasUser?<li><span className="nav-link" onClick={handleLogout}>Logout</span></li>:
             <li><Link className="nav-link"to="/login">Login</Link></li>}
          </ul>
      </nav>
    </header>
    )
    
}
export default withRouter(NavBar)


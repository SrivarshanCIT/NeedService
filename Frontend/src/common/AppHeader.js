import React, { Component } from 'react';
import { Link,NavLink} from 'react-router-dom';
import './AppHeader.css';
import logo from "../img/logo.png"

class AppHeader extends Component { 
    render() {
        return (
             
            <header className="app-header">
             
                    <div className="app-branding">
                        <Link to="/" className="app-title">
                            <img src={logo} width="220px"/>
                        </Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">Login</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Signup</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
            </header>
        )
    }
}

export default AppHeader;
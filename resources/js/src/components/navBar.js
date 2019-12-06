import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    deleteCookie(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    logout() {
        this.deleteCookie("adminKey");
        this.props.history.push("/login");
    }

    getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    render() {
        return (
            <header className="navbar-bg">
                <div className="container">
                    <nav className="navbar">
                        <ul className="navbar-nav ml-auto pr-5">
                            <li className="nav-item dropdown">
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <span className="dropdown-item pointer" onClick={() => this.logout()}>Logout</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
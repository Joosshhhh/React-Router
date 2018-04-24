import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
            <li><NavLink exact to="/"
                //activeStyle={{background : 'tomato'}} to set your own active class style
            >Home</NavLink></li>
            <li><NavLink to="/about"
                //activeClassName="active" to set your own active class name
            >About</NavLink></li>
            <li><NavLink to="/teachers">Teachers</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>
    </header>
);

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

function Menu(props) {

    return (
        <ul id="menu">
            <li><NavLink exact to="/">photos</NavLink></li>
            <li><NavLink to="/favorite">favorite</NavLink></li>
        </ul>
    )
}

export default Menu;

import React from 'react';
import './style.scss';

function Menu(props) {

    const { changePage } = props;

    return (
        <div id="menu">
            <a onClick={changePage} href="/photos">photos</a>
            <br />
            <a onClick={changePage} href="/favorite">favorite</a>
        </div>
    )
}

export default Menu;

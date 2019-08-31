import React from 'react';
import Menu from '../Menu';
import './style.scss';

function Header(props) {

    const { changePage } = props;

    return (
        <div id="header">
            <Menu changePage={changePage} />
            <span>Hello Header</span>
        </div>
    )
}

export default Header;

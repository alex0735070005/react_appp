import React from 'react';
import Menu from './Menu';
import Cart from './Cart';

function Header() {
    return (
        <div id="header">
            <Menu />
            <Cart />
        </div>
    )
}

export default Header;
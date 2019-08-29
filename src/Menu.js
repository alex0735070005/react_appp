import React from 'react';

const menuList = [
    { name: 'item-1', link: '#' },
    { name: 'item-2', link: '#' },
    { name: 'item-3', link: '#' },
    { name: 'item-4', link: '#' }
]

const htmlMenu = (handler) => menuList.map(item => {
    return <li onClick={handler} key={item.name}>{item.name}</li>
})

function Menu() {

    const onDelitHandler = e => {
        alert(e.target.innerHTML)
    }

    return (
        <ul>
            {htmlMenu(onDelitHandler)}
        </ul>
    )
}

export default Menu;
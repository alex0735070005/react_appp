import React from 'react';

function Item(props) {

    const {
        title,
        description,
        likes,
        user,
        data_create,
        data_update,
    } = props.post;

    const { addFavorite, post } = props;

    const add = () => {
        addFavorite(post);
    }

    const checkbox = addFavorite ? <input onClick={add} type="checkbox" /> : '';

    return (
        <div className="post">
            {checkbox}
            <i>{data_update}</i>
            <span>{likes}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{user.name}</b>
        </div>
    )
}

export default Item;

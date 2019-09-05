import React from 'react';

function Post(props) {

    const {
        title,
        description,
        likes,
        user,
        data_create,
        data_update,
    } = props.post;

    return (
        <div className="post">
            <input type="checkbox" />
            <i>{data_update}</i>
            <span>{likes}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{user.name}</b>
        </div>
    )
}

export default Post;

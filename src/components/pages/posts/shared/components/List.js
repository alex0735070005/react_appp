import React from 'react';
import Item from './Item';

function List({ posts, addFavorite }) {
    return posts.map(post =>
        <Item
            key={post.id}
            post={post}
            addFavorite={addFavorite}
        />
    );
}

export default List;

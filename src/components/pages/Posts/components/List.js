import React from 'react';
import Post from './Post';

function List({ posts }) {
    return posts.map(post => <Post key={post.id} post={post} />);
}

export default List;

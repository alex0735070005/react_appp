import React, { useState, useEffect } from 'react';
import List from './components/List';
import { listPosts } from './service';
import './style.scss';

function Posts() {
    const [posts, changePosts] = useState([]);

    useEffect(() => {
        listPosts()
            .then((data) => {
                console.log(data);
                changePosts(data);
            });
    }, []);


    return (
        <div id="posts">
            <List posts={posts} />
        </div>
    )
}

export default Posts;
